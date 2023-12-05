import React from 'react';
import {cl} from '@yearn-finance/web-lib/utils/cl';

import type {ReactElement} from 'react';

type TViewSectionHeading = {
	title: ReactElement | string;
	content: ReactElement | string;
	configSection?: ReactElement;
	className?: string;
};
function ViewSectionHeading({title, content, configSection, className}: TViewSectionHeading): ReactElement {
	return (
		<div className={cl('relative col-span-12 flex flex-col p-4 text-neutral-900 md:p-6', className)}>
			<div className={'w-full md:w-3/4'}>
				<b>{title}</b>
				<p className={'whitespace-pre-wrap text-sm text-neutral-500'}>{content}</p>
			</div>
			{configSection ? (
				<div className={'absolute right-4 top-4 flex flex-col space-y-4'}>{configSection}</div>
			) : null}
		</div>
	);
}

export default ViewSectionHeading;
