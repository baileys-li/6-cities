import { useCallback, useState } from 'react';

export function useBoolean(defaultValue = false) {
	const [isOn, setValue] = useState(defaultValue);

	const setOn = useCallback(() => setValue(true), []);
	const setOff = useCallback(() => setValue(false), []);
	const toggle = useCallback(() => setValue((prev) => !prev), []);

	return { isOn,setOff, setOn, setValue, toggle };
}
