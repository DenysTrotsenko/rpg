import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild
} from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { createJSONEditor, JsonEditor, Mode, TextContent } from 'vanilla-jsoneditor';
import { takeUntil, tap } from 'rxjs/operators';

/* Editor documentation: https://github.com/josdejong/svelte-jsoneditor */

@Component({
    selector: 'std-code-editor',
    template: '<div id="editor" #editor></div>',
    styleUrls: ['./code-editor.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CodeEditorComponent implements AfterViewInit, OnDestroy {
  @Input() set json(json) { this.json$.next(json); }

  @Input() readonly: boolean = false;

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  @Output() errorChange: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('editor', { static: true }) editorRef: ElementRef;

  private editor: JsonEditor;

  private json$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  private destroy$: Subject<void> = new Subject<void>();

  ngAfterViewInit(): void {
    this.editor = createJSONEditor({
      target: this.editorRef.nativeElement,
      props: {
        content: { json: this.json$.getValue() },
        mode: Mode.text,
        readOnly: this.readonly,
        mainMenuBar: false,
        navigationBar: false,
        statusBar: false,
        onChange: (updatedContent, previousContent, { contentErrors, patchResult }) => {
          this.errorChange.emit(contentErrors);
          if (!contentErrors) {
            this.valueChange.emit(JSON.parse((updatedContent as TextContent).text));
          }
        }
      }
    });

    this.json$
      .pipe(
        takeUntil(this.destroy$),
        tap(json => this.editor.set({ json }))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
