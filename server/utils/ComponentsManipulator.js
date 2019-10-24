 module.exports =  new (class ComponentsManipulator {
    constructor() {
        this.timeouts = []
        this.delay = 10000;
    }

    setTmpStates(data, orders) {
        orders.forEach(order => {
            data.forEach(component => {
                switch (component.type) {
                    case 'table':
                        if (order.id == component.id) {
                            component.spec.state = 'booked',
                            this.timeouts.push({
                                id: component.id,
                                timeout: setTimeout(() => {
                                    component.spec.state = 'free'
                                }, this.delay)
                            })
                        }
                        break;
                    case 'seats':
                        component.spec.seats_matrix.forEach(row => row.forEach(chair => {
                            if (chair.id == order.id) {
                                chair.state = 'booked';
                                this.timeouts.push({
                                    id: chair.id,
                                    timeout: setTimeout(() => {
                                        chair.state = 'free'
                                    }, this.delay)
                                })
                            }
                        }))
                        break;
                }
            })
        })
    }

    // this method will clear timeouts by passed order id
    fixStates() {

    }
})();