import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const provider = vscode.languages.registerCompletionItemProvider(
    "jsonct",
    {
      provideCompletionItems(_document, _position, _token, _context) {
        // Sample completions
        const completions = [
          new vscode.CompletionItem("true", vscode.CompletionItemKind.Keyword),
          new vscode.CompletionItem("false", vscode.CompletionItemKind.Keyword),
          new vscode.CompletionItem("null", vscode.CompletionItemKind.Keyword),
        ];

        return completions;
      },
    },
    '"', // Trigger IntelliSense inside strings
  );

  context.subscriptions.push(provider);
}

export function deactivate() {}
