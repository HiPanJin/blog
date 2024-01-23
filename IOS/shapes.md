### **1.Circle 圆形**

```swift
Circle()
	.stroke(Color.black,lineWidth: 2)
  .frame(width: 44,height: 100)
```

`.stork` 一般用于设置形状描边的修饰符，接受两个参数: 描边的颜色 ,线条的宽度。

`.frame` 用于设置视图的尺寸。

注意：`.stroke`和`.frame`的使用顺序是对视图有影响的。如果先使用`.frame`后使用`.stroke`，那么得到的描边是比预期要更大，因为是在`frame`基础上进行描边的。

### **2.Rectangle 长方形**

```swift
Rectangle() //这里使用填充颜色后的矩形作为背景
    .foregroundColor(.blue)
    .ignoresSafeArea()
```

`.foregroundColor()` 用于设置前景色类似于`.fill()`。

`.ignoresSafeArea()`  用于忽略安全区域让矩形充满整个屏幕。

### **3. RoundedRectangle 圆角矩形**

```swift
RoundedRectangle(cornerRadius: 30, style: .continuous) //用圆角矩形绘制了一个sign up 按钮
	.fill(Color.green)
	.frame(height: 44)
	.overlay(Text("Sign up").bold())
```

`RoundedRectangle()`接收两个参数`cornerRadius`和`style`

`cornerRadius`决定了矩形的角是如何弯曲的。定义了圆角的半径，值越大角越圆。

`style` 决定了圆角的形状，有两个枚举值。`.circular`更类似与椭圆 ,`.continuous` 更像传统的圆角矩形。

相同的`cornerRadius`值情况下 `.continuous`会更加圆润。

`.overlay()` 用于在当前视图的前景上添加一个额外的视图，这个额外的视图将作为一个叠加层。

`.fill()` 为图形填充颜色。

### **4.Capsule 胶囊形**

```swift
Capsule()
	.fill(Color.green)
	.frame(height: 44)
	.overlay(Text("Sign up").bold())
```

**5. Final Layout**

```swift
    var body: some View {
        ZStack{
            Rectangle()
                .fill(Color.blue)
                .ignoresSafeArea()
            VStack(spacing:8){
                Circle()
                    .stroke(Color.black,lineWidth: 2)
                    .frame(width:100,height: 100)
                Text("panjin")
                    .font(.title2).bold()
                Capsule()
                
                    .fill(Color.green)
                    .frame(width: 200,height: 50)
                    .overlay(Text("sign in").bold())
            }
            .padding()
            .frame(width: 300,height: 300)
            .background(Color.white)
            .clipShape(RoundedRectangle(cornerSize:CGSize(width: 25, height: 25), style: .continuous))
            .padding()
                
        }
```