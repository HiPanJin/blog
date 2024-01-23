

[![PanJin](https://panjin.me/content/images/2023/06/document.jpg)](https://panjin.me/author/panjin/)

#### [PanJin](https://panjin.me/author/panjin/)

16 Jul 2023 • 1 min read

![](https://panjin.me/content/images/2023/07/image-1.png)

```swift
    var body: some View {
        ZStack{
            Color.blue.ignoresSafeArea()
            VStack {
                Text("SwiftUI for ios 14")
            }
            .frame(width: 300,height: 300)
            .background(Color.white)
            .clipShape(RoundedRectangle(cornerRadius:25.0,style: .continuous))
                
        }
    }
```

可以使用`.clipShape()`裁剪出任何你所想要的形状

`.continuous` 可以裁剪出连续的圆角，在IOS中很常见。