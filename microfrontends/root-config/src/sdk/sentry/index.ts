import jQuery from 'jquery'
import * as Sentry from '@sentry/browser'
import { BrowserTracing } from '@sentry/tracing'

export class SentryProvider {
  public init() {
    this.attachSentryToWindow()
    this.initSentry()
    this.initDataEventClickHandler()
  }

  private attachSentryToWindow() {
    // @ts-ignore
    window.Sentry = Sentry
  }

  private initSentry() {
    Sentry.init({
      dsn: `${location.protocol}//db5c10fcbc874e52b9c5f826fb674484@162.14.109.11:9000/2`,

      integrations: function (integrations) {
        // integrations will be all default integrations
        // console.log('integrations', integrations)
        let intergrationsArr = integrations
        // 在所有默认插件里，去掉去重插件，这样接连两次完全重复的内容也上报
        intergrationsArr = intergrationsArr.filter(function (integration) {
          return integration.name !== 'Dedupe'
        })
        intergrationsArr.push(new BrowserTracing())
        // 开启普通 console.error 也上报的能力，比如 React 内核在开发阶段报的错，目前没用
        // intergrationsArr.push(new CaptureConsole({
        //   levels: ['error']
        // }))
        return intergrationsArr
      },

      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 1.0,
    })
  }

  private initDataEventClickHandler() {
    // 事件行为系统：所有有 data-event-name 属性的 li 被点击时自动上报点击事件
    jQuery('body').on('click', '[data-event-name]', (e: any) => {
      const eventName = e.currentTarget?.dataset?.['eventName']
      if (eventName) {
        SentryProvider.sendClickMessage(eventName)
      }
    })
  }

  // 对于层次深的组件，由于各种原因不方便绑定 data-event-name 或者绑定后 Jquery body 也捕获不到的，直接调用此方法
  static sendClickMessage(eventName: string) {
    Sentry.captureMessage(`[Click] ${eventName}`, 'log')
  }
}
