#!/bin/bash

# Claude hook that runs after tool use (PostToolUse event)
# Automatically formats code with Biome when files are edited or written
# Receives JSON input via stdin containing tool name and parameters

INPUT=$(cat)

TOOL_NAME=$(echo "$INPUT" | jq -r '.tool_name // empty')
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

if [[ "$TOOL_NAME" == "mcp__acp__Write" ]] || [[ "$TOOL_NAME" == "mcp__acp__Edit" ]]; then
    if [[ -n "$FILE_PATH" && "$FILE_PATH" != "null" ]]; then
        if [[ "$FILE_PATH" =~ \.(js|jsx|ts|tsx|json|css|md)$ ]]; then
            pnpm biome check --write "$FILE_PATH" 2>/dev/null
        fi
    fi
fi

exit 0
