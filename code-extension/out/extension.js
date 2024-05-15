"use strict";
var __createBinding = (this && this.__createBinding) ||
  (Object.create
    ? (function (o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (
        !desc ||
        ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
      ) {
        desc = {
          enumerable: true,
          get: function () {
            return m[k];
          },
        };
      }
      Object.defineProperty(o, k2, desc);
    })
    : (function (o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }));
var __setModuleDefault = (this && this.__setModuleDefault) ||
  (Object.create
    ? (function (o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    })
    : function (o, v) {
      o["default"] = v;
    });
var __importStar = (this && this.__importStar) || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod) {
      if (
        k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)
      ) __createBinding(result, mod, k);
    }
  }
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
function activate(context) {
  const provider = vscode.languages.registerCompletionItemProvider("jsonct", {
    provideCompletionItems(_document, _position, _token, _context) {
      // Sample completions
      const completions = [
        new vscode.CompletionItem("true", vscode.CompletionItemKind.Keyword),
        new vscode.CompletionItem("false", vscode.CompletionItemKind.Keyword),
        new vscode.CompletionItem("null", vscode.CompletionItemKind.Keyword),
      ];
      return completions;
    },
  }, '"' // Trigger IntelliSense inside strings
  );
  context.subscriptions.push(provider);
}
exports.activate = activate;
function deactivate() {}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
