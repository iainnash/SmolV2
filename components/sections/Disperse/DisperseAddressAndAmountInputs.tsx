import {IconCross} from '@icons/IconCross';

import {SmolAddressInput} from '../../designSystem/SmolAddressInput';
import {SmolAmountInput} from '../../designSystem/SmolAmountInput';
import {useDisperse} from './useDisperse';

import type {ReactElement} from 'react';
import type {TToken} from '@builtbymom/web3/types';
import type {TInputAddressLike} from '@utils/tools.address';
import type {TAmountInputElement} from '../../designSystem/SmolAmountInput';
import type {TDisperseInput} from './useDisperse';

type TDisperseAddressAndAmountInputs = {
	input: TDisperseInput;
	initialToken: TToken | undefined;
	initialReceiver: string | undefined;
	initialAmount: bigint | undefined;
};

export function DisperseAddressAndAmountInputs({
	input,
	initialReceiver,
	initialToken,
	initialAmount
}: TDisperseAddressAndAmountInputs): ReactElement {
	const {configuration, dispatchConfiguration} = useDisperse();

	const onSetReceiver = (value: Partial<TInputAddressLike>): void => {
		dispatchConfiguration({type: 'SET_RECEIVER', payload: {...value, UUID: input.UUID}});
	};

	const onSetAmount = (value: Partial<TAmountInputElement>): void => {
		dispatchConfiguration({type: 'SET_VALUE', payload: {...value, UUID: input.UUID}});
	};

	const onRemoveInput = (): void => {
		dispatchConfiguration({type: 'DEL_RECEIVER_BY_UUID', payload: input.UUID});
	};

	return (
		<div className={'flex py-2 pl-2 mb-4 w-full bg-neutral-200 rounded-xl items-center'}>
			<div className={'basis-[64rem] mr-4'}>
				<SmolAddressInput
					onSetValue={onSetReceiver}
					initialStateFromUrl={initialReceiver}
					value={input.receiver}
				/>
			</div>
			<div className={'w-full'}>
				<SmolAmountInput
					onSetValue={onSetAmount}
					value={input.value}
					initialValue={{amount: initialAmount, token: initialToken}}
					token={configuration.tokenToSend}
				/>
			</div>
			<button
				className={'p-2 mx-2 text-neutral-600 transition-colors hover:text-neutral-700'}
				onClick={onRemoveInput}>
				<IconCross className={'size-4'} />
			</button>
		</div>
	);
}
