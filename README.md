# qrender
基于qrcode的二维码渲染

> 已解决中文内容扫码显示乱码问题

##### 安装方式

```shell
npm i -S qrender-js
```

##### 使用方式

```js
new QRender({text: 1212, el: document.querySelector('#qr')})
```



##### 配置参数

| 属性名       | 类型                       | 必填 | 默认值 | 描述                                   |
| ------------ | -------------------------- | ---- | ------ | -------------------------------------- |
| text         | `String`                   | 是   |        | 二维码内容，支持url                    |
| el           | `Element`                  | 是   |        | 渲染以后的二维码要插入的DOM节点        |
| render       | `String` （canvas\|table） | 否   | canvas | 渲染方式，默认为canvas                 |
| padding      | `Number`                   | 否   | 10px   | 二维码边距，防止存储图片的时候没有留边 |
| width        | `Number`                   | 否   | 256px  | 宽度                                   |
| height       | `Number`                   | 否   | 256px  | 高度                                   |
| src          | `String`                   | 否   |        | 二维码需要显示图标                     |
| imgWidth     | `Numebr`                   | 否   | 60px   | 图标宽度                               |
| imgHeight    | `Number`                   | 否   | 60px   | 图标宽度                               |
| typeNumber   | `Number`                   | 否   | -1     |                                        |
| correctLevel | `Number`                   | 否   | 2      | 二维码清晰度，数值越大渲染越清晰       |
| backgroud    | `String`                   | 否   | #fff   | 背景颜色                               |
| foreground   | `String`                   | 否   | #000   | 二维码点的颜色                         |

##### 计划

+ [x] 

+ [ ] 二维码支持控制圆角码点
+ [ ] 支持渲染图片二维码
+ [ ] logo支持添加背景阴影

