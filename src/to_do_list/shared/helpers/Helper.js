class Helper{
    static getTemplate(){
        return {
            button:{
                status: {
                    active: {
                        classes: 'badge badge-info',
                        content: 'Active',
                    },
                    hidden: {
                        classes: 'badge badge-light',
                        content: 'Hidden',
                    },
                }
            }
        }
    }

    static sayHello(){
        alert('hello');
    }
    
    static generateId(){
        let min = 100000000;
        let max = 999999999;
        return Math.floor(Math.random()*(max-min)+min)+'';
    }
}

export default Helper;