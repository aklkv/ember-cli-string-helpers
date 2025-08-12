import type camelize from './helpers/camelize.ts';
import type capitalize from './helpers/capitalize.ts';
import type classify from './helpers/classify.ts';
import type dasherize from './helpers/dasherize.ts';
import type htmlSafe from './helpers/html-safe.ts';
import type humanize from './helpers/humanize.ts';
import type lowercase from './helpers/lowercase.ts';
import type titleize from './helpers/titleize.ts';
import type trim from './helpers/trim.ts';
import type truncate from './helpers/truncate.ts';
import type underscore from './helpers/underscore.ts';
import type uppercase from './helpers/uppercase.ts';
import type w from './helpers/w.ts';
export default interface EmberCliStringHelpersRegistry {
    camelize: typeof camelize;
    capitalize: typeof capitalize;
    classify: typeof classify;
    dasherize: typeof dasherize;
    'html-safe': typeof htmlSafe;
    humanize: typeof humanize;
    lowercase: typeof lowercase;
    titleize: typeof titleize;
    trim: typeof trim;
    truncate: typeof truncate;
    underscore: typeof underscore;
    uppercase: typeof uppercase;
    w: typeof w;
}
//# sourceMappingURL=template-registry.d.ts.map