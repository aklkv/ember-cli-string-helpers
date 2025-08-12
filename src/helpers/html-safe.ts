import { helper } from '@ember/component/helper';
import { htmlSafe as _htmlSafe } from '@ember/template';

import createStringHelperFunction from '../-private/create-string-helper.ts';

const htmlSafe = createStringHelperFunction(_htmlSafe);
export default helper(htmlSafe);
