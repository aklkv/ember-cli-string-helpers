import { helper } from '@ember/component/helper';
import { capitalize as _capitalize } from '@ember/string';

import createStringHelperFunction from '../-private/create-string-helper.ts';

const capitalize = createStringHelperFunction(_capitalize);
export default helper(capitalize);
