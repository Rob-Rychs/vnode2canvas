/**
 * @author muwoo
 * Date: 2018/7/15
 */
export class Canvas {
  constructor (width, height, scale) {
    if (!this._canvas) {
      this._canvas = document.createElement('canvas')
    }

    this.width = width
    this.height = height
    this.scale = scale || window.devicePixelRatio

    this._canvas.width = this.width * this.scale
    this._canvas.height = this.height * this.scale
    this._canvas.style.width = this.width + 'px'
    this._canvas.style.height = this.height + 'px'
    this._canvas.getContext('2d').scale(this.scale, this.scale)
    this._ctx = this._canvas.getContext('2d')
  }

  add (offScreenCanvas) {
    this._ctx.clearRect(0, 0, this.width, this.height)
    this._ctx.drawImage(offScreenCanvas, 0, 0, this.width, this.height)
  }
}