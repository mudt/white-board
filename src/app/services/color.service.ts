import { Injectable } from '@angular/core';

import { Decimal } from '../models/color';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  constructor() {}

  /**
   * 16進数RGBから10進数RGBに変換
   * 適切出ない場合 `{r:0, g:0, b:0}` を返す
   * @param hex 16進数GRB
   */
  toDecimal(hex: string): Decimal {
    if (hex === null || hex.length !== 7) {
      return {
        r: 0,
        g: 0,
        b: 0,
      };
    }
    return {
      r: parseInt(hex.substr(1, 2), 16),
      g: parseInt(hex.substr(3, 2), 16),
      b: parseInt(hex.substr(5, 2), 16),
    };
  }

  toHue(hex: string): number {
    const decimal = this.toDecimal(hex);
    const h = this.calcHue(decimal);
    return Math.round(h);
  }

  /**
   * 彩度を求める
   * 0-100で計算
   * @param hex 16進数GRB
   */
  toSaturation(hex: string): number {
    const decimal = this.toDecimal(hex);
    const s = this.calcSaturation(decimal);
    return Math.round(s * 100);
  }

  /**
   * 輝度を求める
   * 0-100で計算
   * @param hex 16進数GRB
   */
  toLightness(hex: string): number {
    const decimal = this.toDecimal(hex);
    const l = this.calcLightness(decimal);
    return Math.round((l / 255) * 100);
  }

  private calcHue(decimal: Decimal): number {
    const { min, max } = this.getMinMax(decimal);
    let h = 0;
    if (decimal.r === decimal.g && decimal.r === decimal.b) {
      return h;
    } else if (decimal.r === max) {
      h = 60 * ((decimal.g - decimal.b) / (max - min));
    } else if (decimal.g === max) {
      h = 60 * ((decimal.b - decimal.r) / (max - min)) + 120;
    } else if (decimal.b === max) {
      h = 60 * ((decimal.r - decimal.g) / (max - min)) + 240;
    }
    return h < 0 ? h + 360 : h;
  }

  /**
   * 彩度を計算
   * @param decimal 10進数RBG
   */
  private calcSaturation(decimal: Decimal): number {
    const { min, max } = this.getMinMax(decimal);
    const cnt = (max + min) / 2;
    if (127 < cnt) {
      return (max - min) / (510 - max - min);
    } else {
      return (max - min) / (max + min);
    }
  }

  /**
   * 輝度を計算
   * @param decimal 10進数RBG
   */
  private calcLightness(decimal: Decimal): number {
    const { min, max } = this.getMinMax(decimal);
    return (max + min) / 2;
  }

  /**
   * 10進数のRGBの中で最大値と最小値を求める
   * @param decimal 10進数RBG
   */
  private getMinMax(decimal: Decimal) {
    const min = Math.min(decimal.r, decimal.g, decimal.b);
    const max = Math.max(decimal.r, decimal.g, decimal.b);
    return { min, max };
  }

  /**
   * ダークかどうか
   * （判断適当）
   * @param hex 16進数RGB
   * @param lightness 輝度
   */
  isDark(hex: string) {
    const hue = this.toHue(hex);
    const saturation = this.toSaturation(hex);
    const lightness = this.toLightness(hex);
    if (50 <= hue && hue <= 70 && 90 <= lightness) {
      return false;
    } else if (230 <= hue && hue <= 260) {
      return true;
    }
    return lightness <= 30 || saturation >= 50;
  }
}
