import type { ObjectEvents } from '../../EventTypeDefs';
import type { Group } from '../Group';
import type { Canvas } from '../../canvas/Canvas';
import type { StaticCanvas } from '../../canvas/StaticCanvas';
import { ObjectGeometry } from './ObjectGeometry';
type TAncestor = StackedObject | Canvas | StaticCanvas;
/**
 * Strict: only ancestors that are objects (without canvas)
 */
export type Ancestors<Strict> = Strict extends true ? [StackedObject | Group] | [StackedObject | Group, ...Group[]] | Group[] : [StackedObject | Group | Canvas | StaticCanvas] | [StackedObject | Group, Canvas | StaticCanvas] | [StackedObject, ...Group[]] | Group[] | [StackedObject | Group, ...Group[], Canvas | StaticCanvas];
export type AncestryComparison<Strict> = {
    /**
     * common ancestors of `this` and`other`(may include`this` | `other`)
     */
    common: Ancestors<Strict>;
    /**
     * ancestors that are of `this` only
     */
    fork: Ancestors<Strict>;
    /**
     * ancestors that are of `other` only
     */
    otherFork: Ancestors<Strict>;
};
export declare class StackedObject<EventSpec extends ObjectEvents = ObjectEvents> extends ObjectGeometry<EventSpec> {
    /**
     * A reference to the parent of the object
     * Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref
     */
    __owningGroup?: Group;
    /**
     * Returns instance's parent **EXCLUDING** `ActiveSelection`
     * @param {boolean} [strict] exclude canvas as well
     */
    getParent<T extends boolean>(strict?: T): TAncestor | undefined;
    /**
     * Checks if object is descendant of target
     * Should be used instead of {@link Group.contains} or {@link StaticCanvas.contains} for performance reasons
     * @param {TAncestor} target
     * @returns {boolean}
     */
    isDescendantOf(target: TAncestor): boolean;
    /**
     *
     * @param {boolean} [strict] returns only ancestors that are objects (without canvas)
     * @returns {Ancestors} ancestors (excluding `ActiveSelection`) from bottom to top
     */
    getAncestors<T extends boolean>(strict?: T): Ancestors<T>;
    /**
     * Compare ancestors
     *
     * @param {StackedObject} other
     * @param {boolean} [strict] finds only ancestors that are objects (without canvas)
     * @returns {AncestryComparison} an object that represent the ancestry situation.
     */
    findCommonAncestors<T extends this, S extends boolean>(other: T, strict?: S): AncestryComparison<S>;
    /**
     *
     * @param {StackedObject} other
     * @param {boolean} [strict] checks only ancestors that are objects (without canvas)
     * @returns {boolean}
     */
    hasCommonAncestors<T extends this>(other: T, strict?: boolean): boolean;
    /**
     *
     * @param {FabricObject} other object to compare against
     * @returns {boolean | undefined} if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`
     */
    isInFrontOf<T extends this>(other: T): boolean | undefined;
}
export {};
//# sourceMappingURL=StackedObject.d.ts.map