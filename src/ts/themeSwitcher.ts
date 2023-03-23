class ThemeSwitcher {
   readonly switcher = document.querySelector('.theme-switcher-container');
   readonly switcherThumb = document.querySelector('.theme__switcher-thumb');
   readonly hiddenRange = document.querySelector('#hidden-range')

   constructor() {
      this.hiddenRange.addEventListener('change', this.changeRange.bind(this))
   }

   private changeRange() {
      const value = +this.hiddenRange.value
      this.switcherThumb.style.transform =
         `translateX(${value + (0.35 * value)}rem)`;

      this.changeTheme(value + 1)
   }
   private changeTheme(value: number) {
      document.body.classList.value = `theme${value}`
   }

}
export const themeSwitcher = new ThemeSwitcher()