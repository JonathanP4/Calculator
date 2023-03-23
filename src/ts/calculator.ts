import stringMath from "string-math";

class Calculator {
   readonly numpad = document.querySelector('.numpad')
   readonly display = document.querySelector('.display input')
   constructor() {
      this.numpad.addEventListener('click', function (e: { target: HTMLDivElement }) {
         if (e.target.dataset.type === 'num' || e.target.dataset.type === 'operator')
            this.showOnDisplay(e.target);
         if (e.target.classList.contains('btn--result'))
            this.displayResult(e.target);
         if (e.target.classList.contains('btn--reset'))
            this.clearDisplay();
         if (e.target.classList.contains('btn--del'))
            this.deleteLast();
      }.bind(this))
   }
   private showOnDisplay(el: HTMLDivElement) {
      this.display.value += el.textContent
   }
   private displayResult() {
      if (this.display.value) {
         const inputVal = this.display.value.replaceAll('x', '*')
         const result = stringMath(inputVal);

         this.display.value = result
      }
   }
   clearDisplay() {
      this.display.value = ''
   }
   deleteLast() {
      this.display.value = this.display.value.slice(0, -1)
   }
}

export const calculator = new Calculator()