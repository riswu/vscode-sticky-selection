import * as vscode from 'vscode';
import Controller from './controller';
import Command from './command';

export function activate(context: vscode.ExtensionContext) {
  const controllers = new Map<string, Controller>();

  function getOrCreateController(editor: vscode.TextEditor) {
    const key = editor.document.fileName;
    if (controllers.has(key)) {
      return controllers.get(key)!;
    } else {
      const controller = new Controller();
      controllers.set(key, controller);
      return controller;
    }
  }

  context.subscriptions.push(vscode.commands.registerCommand('sticky-selection.enterStickySelectionMode', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const controller = getOrCreateController(editor);
    controller.enterStickySelectionMode();
  }));

  context.subscriptions.push(vscode.commands.registerCommand('sticky-selection.exitStickySelectionMode', args => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const controller = getOrCreateController(editor);
    if (args && args.command) {
      const command = new Command(args.command, args.args ? args.args : null);
      controller.exitStickySelectionMode(editor, command);
    } else {
      controller.exitStickySelectionMode(editor);
    }
  }));

  context.subscriptions.push(vscode.commands.registerCommand('type', args => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const controller = getOrCreateController(editor);
    controller.type(args);
  }));

  vscode.window.onDidChangeActiveTextEditor(editor => {
    if (!editor) return;

    const controller = getOrCreateController(editor);
    controller.activate();
  });

  vscode.workspace.onDidCloseTextDocument(document => {
    controllers.forEach((controller, key) => {
      if (key === document.fileName) {
        controllers.delete(key);
      }
    });
  });

  context.subscriptions.push(vscode.commands.registerCommand('sticky-selection.cursorLineStartSelect', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    editor.selections = editor.selections.map(selection => {
      const active = selection.active;
      return new vscode.Selection(selection.anchor, active.with(active.line, 0));
    });
  }));
}

export function deactivate() {
  return;
}
