import type { TClassProperties } from '../typedefs';
import { BaseFilter } from './BaseFilter';
import type { T2DPipelineState, TWebGLUniformLocationMap } from './typedefs';
export type TGrayscaleMode = 'average' | 'lightness' | 'luminosity';
export declare const grayscaleDefaultValues: Partial<TClassProperties<Grayscale>>;
/**
 * Grayscale image filter class
 * @example
 * const filter = new Grayscale();
 * object.filters.push(filter);
 * object.applyFilters();
 */
export declare class Grayscale extends BaseFilter {
    mode: TGrayscaleMode;
    static type: string;
    static defaults: Partial<TClassProperties<Grayscale>>;
    /**
     * Apply the Grayscale operation to a Uint8Array representing the pixels of an image.
     *
     * @param {Object} options
     * @param {ImageData} options.imageData The Uint8Array to be filtered.
     */
    applyTo2d({ imageData: { data } }: T2DPipelineState): void;
    getCacheKey(): string;
    getFragmentSource(): string;
    /**
     * Return WebGL uniform locations for this filter's shader.
     *
     * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
     * @param {WebGLShaderProgram} program This filter's compiled shader program.
     */
    getUniformLocations(gl: WebGLRenderingContext, program: WebGLProgram): TWebGLUniformLocationMap;
    /**
     * Send data from this filter to its shader program's uniforms.
     *
     * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
     * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
     */
    sendUniformData(gl: WebGLRenderingContext, uniformLocations: TWebGLUniformLocationMap): void;
    /**
     * Grayscale filter isNeutralState implementation
     * The filter is never neutral
     * on the image
     **/
    isNeutralState(): boolean;
}
//# sourceMappingURL=Grayscale.d.ts.map