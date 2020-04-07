# vscode-sticky-selection README

This extension provides sticky-selection (region in Emacs) that supports multiple cursors and multiple tabs.

## Extension Commands

This extension contributes the following commands:

- `enterStickySelectionMode`: Enter sticky-selection-mode
- `exitStickySelectionMode`: Exit sticky-selection-mode

## Extension Keybindings

This extension contributes the following keybindings:

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

In such manners, you can support other move commands including those of third parties.

By default, sticky-selection-mode continues even if you execute commands such as cut and paste. You can exit the mode after execution by taking these commands as arguments to exitStickySelectionMode as follows:

```json
[
  {
    "key": "cmd+x",
    "command": "sticky-selection.exitStickySelectionMode",
    "args": {
      "command": "editor.action.clipboardCutAction"
    },
    "when": "editorTextFocus && !editorReadonly && inStickySelectionMode"
  },
  {
    "key": "cmd+c",
    "command": "sticky-selection.exitStickySelectionMode",
    "args": {
      "command": "editor.action.clipboardCopyAction"
    },
    "when": "editorTextFocus && inStickySelectionMode"
  },
  {
    "key": "cmd+v",
    "command": "sticky-selection.exitStickySelectionMode",
    "args": {
      "command": "editor.action.clipboardPasteAction"
    },
    "when": "editorTextFocus && !editorReadonly && inStickySelectionMode"
  }
]
```

In such manners, you can support other commands such as `backspace` and `delete`.

## Release Notes

### 1.1.0

Change `exitStickySelectionMode` to take a command to execute before exiting sticky-selection-mode as an argument.

### 1.0.0

Initial release.
