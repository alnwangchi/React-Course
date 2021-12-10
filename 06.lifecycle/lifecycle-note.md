# 生命週期

## 三個階段

1. 初始化階段 : 初次渲染由 ReactDOM.render() 去做
> 1. constructor()
> 2. componentWillMount()
> 3. render()
> 4. componentDidMount()
2. 更新階段 : 由元件內 setState() 觸發或是父元件 render 觸發
> 1. shouldComponentUpdate()
> 2. componentWillUpdate()
> 3. render()
> 4. componentDidUpdate()
3. 卸載階段 : 由 ReactDOM.unmountComponentAtNode 觸發
> 1. componentWillUnmount()


## 可能較常用的有

1. componentDidMount()  ===> 做一些初始化的事情，例如發request、設定計時器、進場動畫
2. componentWillUnmount() ===> 做一些收尾的事情，例如取消定時器、取消訂閱