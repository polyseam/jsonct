import {
  createConnection,
  TextDocuments,
  Diagnostic,
  DiagnosticSeverity,
  ProposedFeatures,
  TextDocumentSyncKind
} from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';

const connection = createConnection(ProposedFeatures.all);
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

connection.onInitialize(() => {
  return {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Incremental,
      diagnosticsProvider: true
    }
  };
});

documents.onDidChangeContent(change => {
  validateTextDocument(change.document);
});

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
  const text = textDocument.getText();
  const diagnostics: Diagnostic[] = [];

  // Check for a very simple syntax error: unquoted strings
  const regex = /(["`][\s\S]*?["`]|[^,\s:{}\[\]"\d.][^,\s:{}\[\]]*)/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text))) {
    if (!match[1].startsWith('"') && !match[1].startsWith('`') && !/^\d+$/.test(match[1])) {
      const diagnostic: Diagnostic = {
        severity: DiagnosticSeverity.Error,
        range: {
          start: textDocument.positionAt(match.index),
          end: textDocument.positionAt(match.index + match[1].length)
        },
        message: `Invalid token: ${match[1]}`,
        source: 'jsonct'
      };
      diagnostics.push(diagnostic);
    }
  }

  connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

documents.listen(connection);
connection.listen();
