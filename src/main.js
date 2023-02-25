module.exports = class Tag extends Number {

    constructor(val, tag) {

        super(val)

        this.tag = tag

        this.value = this.valueOf()

    }

}
