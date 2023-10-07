import type { ObjectEvents } from '../../EventTypeDefs';
import { FabricObjectSVGExportMixin } from './FabricObjectSVGExportMixin';
import { InteractiveFabricObject } from './InteractiveObject';
import type { FabricObjectProps } from './types/FabricObjectProps';
import type { TFabricObjectProps, SerializedObjectProps } from './types';
export interface FabricObject<Props extends TFabricObjectProps = Partial<FabricObjectProps>, SProps extends SerializedObjectProps = SerializedObjectProps, EventSpec extends ObjectEvents = ObjectEvents> extends FabricObjectSVGExportMixin {
}
export declare class FabricObject<Props extends TFabricObjectProps = Partial<FabricObjectProps>, SProps extends SerializedObjectProps = SerializedObjectProps, EventSpec extends ObjectEvents = ObjectEvents> extends InteractiveFabricObject<Props, SProps, EventSpec> {
}
export { cacheProperties } from './defaultValues';
/**
 * @deprecated The old fabric.Object class can't be imported as Object because of conflict with the JS api
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * For this reason it has been renamed to FabricObject.
 * Please use `import { FabricObject }` in place of `import { Object as FabricObject }`
 */
export declare class _Object extends FabricObject {
}
//# sourceMappingURL=FabricObject.d.ts.map