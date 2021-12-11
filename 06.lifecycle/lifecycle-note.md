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

## 注意 在未來的版本中可能會出現問題(關於異步 render)
可行但是可能會跳出警告 (Will 系列)
1. componentWillMount()
2. componentWillUpdate()
3. componentWillReceiveProps()

被加上棄用前綴警示 不過實際開發使用頻率應該不高
1. UNSAFE_componentWillMount()
2. UNSAFE_componentWillUpdate()
3. UNSAFE_componentWillReceiveProps()

## 新版本在更新元件時的相比
新版本即將廢棄上述所說的三個 Will 系列勾子，然新增了兩個勾子但都不常用
1. getDerivedStateFromProps()
2. getSnapshotBeforeUpdate()

render() and componentDidUpdate() 之間多了一個 getSnapshotBeforeUpdate()
