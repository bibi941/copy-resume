! function () {
    let view = document.querySelector('section.message')
    let model = {
        init: function () {
            var APP_ID = '0SWnlB3MG4l9qlwGbDyIK0u0-gzGzoHsz'
            var APP_KEY = 'DYXIwmP1bydIyc24FE8VCb4V'
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        //get数据
        get: function () {
            var query = new AV.Query('Message')
            return query.find() //promise
        },
        //save数据
        save: function (name, content) {
            var Message = AV.Object.extend('Message')
            var message = new Message()
            return message.save({ //promise
                name: name,
                content: content
            })
        }
    }
    let controller = {
        view: null,
        init: function (view, model) {
            this.view = view
            this.model = model
            this.model.init()
            this.messageList = document.querySelector('#messageList')
            this.form = document.querySelector('#postMessageForm')
            this.loadMessages()
            this.bindEvents()
        },
        loadMessages: function () {
            this.model.get().then(function (message) {
                    let array = message.map(item => item.attributes) //所有数据都在aiitributes里面
                    array.forEach(item => {
                        let li = document.createElement('li')
                        li.innerText = `${item.name}:${item.content}`
                        this.messageList.appendChild(li)
                    })
                    return AV.Object.saveAll(message)
                })
                .then(
                    function (message) {
                        // 更新成功
                    },
                    function (error) {
                        // 异常处理
                        alert('玄学问题，改天再来好吧')
                        console.log(error)
                    }
                )
        },
        bindEvents: function () {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault()
                this.undatePage()
            })
        },
        undatePage: function () {
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            this.model.save(name, content).then(
                function (object) {
                    let li = document.createElement('li')
                    li.innerText = `${object.attributes.name}:${
                        object.attributes.content
                    }`
                    let messageList = document.querySelector('#messageList')
                    messageList.appendChild(li)
                    myForm.querySelector('input[name=content]').value = ''
                },
                function (error) {
                    console.log(error)
                }
            )
        }
    }
    controller.init(view, model)
}.call()

