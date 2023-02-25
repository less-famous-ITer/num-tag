export default class Tag extends Number {

    value: number
    tag: number
    
    constructor(val: any, tag: any) {
        super(val)
        this.tag = tag
        this.value = this.valueOf()
    }
}