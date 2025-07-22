import { isHTMLSafe } from '@ember/template';

import type { SafeString } from '@ember/template';

export default function <T extends string | SafeString>(
  stringFunction: (input: string) => T,
): (args: [string | SafeString | undefined | null]) => T {
  return function ([input]) {
    if (isHTMLSafe(input)) {
      input = input.toString();
    }

    input = input || '';
    return stringFunction(input);
  };
}
