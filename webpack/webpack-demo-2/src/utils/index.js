import { cloneDeep } from 'lodash-es';

export function clone(payload) {
	return cloneDeep(payload);
}
