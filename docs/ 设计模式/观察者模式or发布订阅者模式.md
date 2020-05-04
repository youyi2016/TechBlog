# 观察者模式

### 应用场景

Vue 中的 emit/on bus 模式, 跨组件通信。

Websocket 消息事件的订阅与发布。

### 实现原理

相当于报纸订阅者向报社订阅报纸，报社要满足订阅者的不同需求，不同订阅者订阅相同的报纸，报社需要将该报纸卖多份。

```
class FEEvents {
	eventsMap = {}

	on(eventName, eventfn) {
		var _ref;
		let stack = (_ref = this.eventsMap[eventName]) != null ? _ref : this.eventsMap[eventName] = [];
		stack.push(eventfn);
		return this.eventsMap[eventName] = stack;
	}

	emit(eventName, data) {
		var _ref;
		var stack = (_ref = this.eventsMap[eventName]) != null ? _ref : this.eventsMap[eventName] = [];
		for (var _i = 0, _len = stack.length; _i < _len; _i++) {
			var fn = stack[_i];
			if (!fn) return false
			fn(data)
		}
	}

	off(eventName) {
		return (this.eventsMap[eventName]) != null ? this.eventsMap[eventName].length = 0 : void 0;
	}

	one(eventName, eventfn) {

		this.off(eventName)
		this.on(eventName, eventfn)
	}
}

let eventObj = new FEEvents()
eventObj.on('call', function (data) {
	console.log('my name is:', data)
})

eventObj.on('call', function (data) {
	console.log('my age is:', data)
})

eventObj.emit('call', 'no data')

eventObj.one('oneEvent', function () {
	console.log('one event 1....')
})

eventObj.one('oneEvent', function () {
	console.log('one event 2....')
})

eventObj.emit('oneEvent')
```

**参考资料：**

[观察者模式](http://www.alloyteam.com/2012/10/commonly-javascript-design-pattern-observer-mode/)

11-26
