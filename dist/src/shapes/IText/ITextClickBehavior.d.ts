import type { TPointerEvent, TPointerEventInfo } from '../../EventTypeDefs';
import type { XY } from '../../Point';
import type { DragMethods } from '../Object/InteractiveObject';
import { DraggableTextDelegate } from './DraggableTextDelegate';
import type { ITextEvents } from './ITextBehavior';
import { ITextKeyBehavior } from './ITextKeyBehavior';
import type { TOptions } from '../../typedefs';
import type { TextProps, SerializedTextProps } from '../Text/Text';
export declare abstract class ITextClickBehavior<Props extends TOptions<TextProps> = Partial<TextProps>, SProps extends SerializedTextProps = SerializedTextProps, EventSpec extends ITextEvents = ITextEvents> extends ITextKeyBehavior<Props, SProps, EventSpec> implements DragMethods {
    private __lastSelected;
    private __lastClickTime;
    private __lastLastClickTime;
    private __lastPointer;
    private __newClickTime;
    protected draggableTextDelegate: DraggableTextDelegate;
    initBehavior(): void;
    shouldStartDragging(): boolean;
    /**
     * @public override this method to control whether instance should/shouldn't become a drag source, @see also {@link DraggableTextDelegate#isActive}
     * @returns {boolean} should handle event
     */
    onDragStart(e: DragEvent): boolean;
    /**
     * @public override this method to control whether instance should/shouldn't become a drop target
     */
    canDrop(e: DragEvent): boolean;
    /**
     * Default event handler to simulate triple click
     * @private
     */
    onMouseDown(options: TPointerEventInfo): void;
    isTripleClick(newPointer: XY): boolean;
    /**
     * Default handler for double click, select a word
     */
    doubleClickHandler(options: TPointerEventInfo): void;
    /**
     * Default handler for triple click, select a line
     */
    tripleClickHandler(options: TPointerEventInfo): void;
    /**
     * Default event handler for the basic functionalities needed on _mouseDown
     * can be overridden to do something different.
     * Scope of this implementation is: find the click position, set selectionStart
     * find selectionEnd, initialize the drawing of either cursor or selection area
     * initializing a mousedDown on a text area will cancel fabricjs knowledge of
     * current compositionMode. It will be set to false.
     */
    _mouseDownHandler({ e }: TPointerEventInfo): void;
    /**
     * Default event handler for the basic functionalities needed on mousedown:before
     * can be overridden to do something different.
     * Scope of this implementation is: verify the object is already selected when mousing down
     */
    _mouseDownHandlerBefore({ e }: TPointerEventInfo): void;
    /**
     * standard handler for mouse up, overridable
     * @private
     */
    mouseUpHandler({ e, transform, button }: TPointerEventInfo): void;
    /**
     * Changes cursor location in a text depending on passed pointer (x/y) object
     * @param {TPointerEvent} e Event object
     */
    setCursorByClick(e: TPointerEvent): void;
    /**
     * Returns index of a character corresponding to where an object was clicked
     * @param {TPointerEvent} e Event object
     * @return {Number} Index of a character
     */
    getSelectionStartFromPointer(e: TPointerEvent): number;
}
//# sourceMappingURL=ITextClickBehavior.d.ts.map