import { ref } from 'vue';

export default {
    setup() {
        const display = ref("");
        const numberBefore = "";
        const numberAfter = "";
        const operator = "";
        const value = 0;
        return { display, numberAfter, numberBefore, operator, value }
    },
    methods: {

        valueFromInput(input) {
            if (input === ",") input = ".";
            if (this.operator.includes("+") || this.operator.includes("-") || this.operator.includes("/") || this.operator.includes("*")) {
                return this.numberAfter = this.numberAfter.concat("", input);
            }
            return this.numberBefore = this.numberBefore.concat("", input);
        },

        handlerNumber(number) {
            this.valueFromInput(number);
            this.display = this.display.concat("", number);
        },

        setOperator(operator) {
            this.operator = operator;
            this.display = this.display.concat( ` ${this.operator} `);
        },

        handlerButton(operator) {
            switch (operator) {
                case "/":
                    this.setOperator(operator);
                    break;
                case "+":
                    this.setOperator(operator);
                    break;
                case "-":
                    this.setOperator(operator);
                    break;
                case "*":
                    this.setOperator(operator);
                    break;
                case "=":
                    this.handlerEqual();
                    break;
                case "c":
                    this.handlerClear();
                    break;
            }
        },
        
        handlerClear() {
            this.display = "";
            this.numberAfter = "";
            this.numberBefore = "";
            this.operator = "";
            this.value = 0;
        },

        handlerSum() {
            this.value = parseFloat(this.numberBefore) + parseFloat(this.numberAfter);
        },

        handlerMin() {
            this.value = parseFloat(this.numberBefore) - parseFloat(this.numberAfter);
        },

        handlerMulti() {
            this.value = parseFloat(this.numberBefore) * parseFloat(this.numberAfter);
        },

        handlerDiv() {
            this.value = parseFloat(this.numberBefore) / parseFloat(this.numberAfter);
        },

        handlerEqual() {

            switch (this.operator) {
                case "+":
                    this.handlerSum();
                    break;
                case "-":
                    this.handlerMin();
                    break;
                case "*":
                    this.handlerMulti();
                    break;
                case "/":
                    this.handlerDiv();
                    break;
                        
                default:
                    this.handlerClear();
            }
            this.numberBefore = this.value.toString();
            this.display = this.value.toString();
            this.operator = "";
            this.numberAfter = "";
        }

    }
}
