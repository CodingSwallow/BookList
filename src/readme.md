### 组件结构
{ BookApp { BookAdd , BookList { Book { Rate } } } 
### 基本嵌套实现
```
BookApp.js
render () {
    return (
      <div>
        <BookList/>
        <BookAdd/>
      </div>
    )
}

BookAdd.js
render () {
    return (
      <div>
       <input id='name'/>
       <input id='author'/>
       <button></button>
      </div>
    )
}

BookList.js
render () {
  return (
    <div>
      //循环
      <Book />
    </div>
  )
}

Book.js
render () {
  return (
    <div>
      <span>name</span>
      <span>author</span>
      <span>score</span>
      <span>grade</span>
      <span>delete</span>
    </div>
  )
}
```
### 添加功能实现
给BookAdd两个state，name和author，首先编写函数并绑定input使其可以输入，然后编写button的点击事件，在点击事件中将name和author传给父组件BookApp

### 列表显示所有的book
父组件从BookAdd获得name和author后，传给子组件BookList，通过props实现，BookList获得后，再传给Book，Book直接使用嵌套在span中，BookList实现循环的时候用map

### 保存添加的内容到localStorage
在BookApp中写函数将传过来的包含Book name和author的books保存在localStorage中

### 页面加载时加载localStorage数据
在BookApp的componentWillMount()中加载加载localStorage数据的函数

### 评分功能实现
我选择编写一个组件Rate，里面只有一个span，爱心图，有两种样式，一种是红色，表示喜欢，一种是白色，表示不喜欢，每个Book5个Rate，每个Rate两种状态，用数组表示五个rate的状态，0关，1开，同时编写一个函数，输入分数，输出rate状态。点击爱心的时候，索引表示分数-1，点击爱心也就是点击最底层的组件Rate，将分数score（index+1）传给Book，Book获得分数计算状态再传给Rate改变其样式，同时Book将分数传给BookList，BookList传给BookApp，BookApp保存到localStorage中，同时改变BookApp状态books，改变状态后，BookList获得了新的props分数，显示在界面上
