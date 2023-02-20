     Vue.createApp({
            
            template:'#modular',//1模块

            data:function(){//2数据
                return{
                    books:[
                        {
                            id:1,
                            name:"《算法导论》",
                            date:"2006-9",
                            price:85.00,
                            count:1
                        },
                        {
                            id:2,
                            name:"《UNIX编程艺术》",
                            date:"2006-9",
                            price:59.00,
                            count:1
                        },
                        {
                            id:3,
                            name:"《编程珠肌》",
                            date:"2006-9",
                            price:39.00,
                            count:1
                        },
                        {
                            id:4,
                            name:"《代码大全》",
                            date:"2006-9",
                            price:128.00,
                            count:1
                        }
                    ]
                }
            },
            computed:{
                totalPrice(){//计算属性
                    let finalPrice=0;//临时变量
                    for(let book of this.books){//此处需要用of,用in会显示nan
                        finalPrice += book.count * book.price;
                    }
                    return finalPrice;
                }
            },

            methods:{//3方法
              addbook(index){//给方法一个索引
                this.books[index].count++;
              },
              delbook(index){
                this.books[index].count--;
              },
              removebook(index){
                this.books.splice(index,1);
              }  
            }
        }).mount("#app");
