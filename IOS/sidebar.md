![](https://panjin.me/content/images/2023/07/image.png)

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView{
            List{
                NavigationLink(destination:HomeView()){
                    Label("Courses", systemImage:"book")
                    
                }
                NavigationLink(destination: TutorialsView()){
                    Label("Tutorials", systemImage:"square")
                }
            }
            .navigationTitle("Learn") //导航标题
            HomeView() //默认页面
            
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
```

`NavigationView` 用于设置导航页面，一般在使用在应用的最外层。直接子视图通常会是 `List`、`ScrollView` 或其他包含多个子项的视图，这些子项可以链接到其他视图。

`NavigationLink`是一个可以导航到应用另一部分的按钮。有两个参数分别是有一个标题和一个指定目标视图的参数。

`.navigationtitle()`用于设置导航页面的标题。