# vscode-sticky-selection README

This extension provides sticky-selection (region in Emacs) that supports multiple cursors and multiple tabs.

## Extension Settings

This extension contributes the following settings:

* `sticky-selection.enable`: enable/disable this extension
* `sticky-selection.exitCommands`: generate commands to exit sticky-selection-mode after execution

### Example

`settings.json`:

```json
{
  "sticky-selection.exitCommands": [
    {
      "command": "deleteLeft"
    },
    {
      "command": "deleteRight"
    },
    {
      "command": "editor.action.clipboardCutAction"
    },
    {
      "command": "editor.action.clipboardCopyAction"
    },
    {
      "command": "editor.action.clipboardPasteAction"
    }
  ]
}
```

`keybindings.json`:

```json
[
  {
    "key": "backspace",
    "command": "sticky-selection.deleteLeft",
    "when": "editorTextFocus && inStickySelectionMode"
  },
  {
    "key": "delete",
    "command": "sticky-selection.deleteRight",
    "when": "editorTextFocus && inStickySelectionMode"
  },
  {
    "key": "cmd+x",
    "command": "sticky-selection.editor.action.clipboardCutAction",
    "when": "editorTextFocus && !editorReadonly && inStickySelectionMode"
  },
  {
    "key": "cmd+c",
    "command": "sticky-selection.editor.action.clipboardCopyAction",
    "when": "editorTextFocus && inStickySelectionMode"
  },
  {
    "key": "cmd+v",
    "command": "sticky-selection.editor.action.clipboardPasteAction",
    "when": "editorTextFocus && !editorReadonly && inStickySelectionMode"
  }
]
```

## Keybindings

| Key | Description |
|---|-----------|
| ctrl+space | Enter sticky-selection-mode |
| escape | Exit sticky-selection-mode |
| down | Execute `cursorDownSelect` when in sticky-selection-mode |
| left | Execute `cursorLeftSelect` when in sticky-selection-mode |
| right | Execute `cursorRightSelect` when in sticky-selection-mode |
| up | Execute `cursorUpSelect` when in sticky-selection-mode |
| ctrl+n | Execute `cursorDownSelect` when in sticky-selection-mode (macOS) |
| ctrl+b | Execute `cursorLeftSelect` when in sticky-selection-mode (macOS) |
| ctrl+f | Execute `cursorRightSelect` when in sticky-selection-mode (macOS) |
| ctrl+p | Execute `cursorUpSelect` when in sticky-selection-mode (macOS) |
| end | Execute `cursorEndSelect` when in sticky-selection-mode |
| home | Execute `cursorHomeSelect` when in sticky-selection-mode |
| cmd+right | Execute `cursorEndSelect` when in sticky-selection-mode (macOS) |
| cmd+left | Execute `cursorHomeSelect` when in sticky-selection-mode (macOS) |
| ctrl+e | Execute `cursorEndSelect` when in sticky-selection-mode (macOS) |
| ctrl+a | Execute `cursorLineStart` with selection when in sticky-selection-mode (macOS) |
| ctrl+end | Execute `cursorBottomSelect` when in sticky-selection-mode (Windows) |
| ctrl+home | Execute `cursorTopSelect` when in sticky-selection-mode (Windows) |
| cmd+down | Execute `cursorBottomSelect` when in sticky-selection-mode (macOS) |
| cmd+up | Execute `cursorTopSelect` when in sticky-selection-mode (macOS) |
| pagedown | Execute `cursorPageDownSelect` when in sticky-selection-mode |
| pageup | Execute `cursorPageUpSelect` when in sticky-selection-mode |
| alt+right | Execute `cursorWordEndRightSelect` when in sticky-selection-mode (macOS) |
| alt+left | Execute `cursorWordStartLeftSelect` when in sticky-selection-mode (macOS)
| ctrl+alt+right | Execute `cursorWordPartRightSelect` when in sticky-selection-mode (macOS) |
| ctrl+alt+left | Execute `cursorWordPartLeftSelect` when in sticky-selection-mode (macOS) |

If you are an Emacs user, you can enable the mode for `ctrl+v` and `alt+v` by editing `keybindings.json` as follows:

```json
[
  {
    "key": "ctrl+v",
    "command": "cursorPageDown",
    "when": "textInputFocus"
  },
  {
    "key": "alt+v",
    "command": "cursorPageUp",
    "when": "textInputFocus"
  },
  {
    "key": "ctrl+v",
    "command": "cursorPageDownSelect",
    "when": "editorTextFocus && inStickySelectionMode"
  },
  {
    "key": "alt+v",
    "command": "cursorPageUpSelect",
    "when": "editorTextFocus && inStickySelectionMode"
  }
]
```

## Release Notes

### 1.0.0

Initial release
