import { List } from '@material-ui/core';
import * as React from 'react';
import { MissingWatchedDateDialog } from '../../../components/MissingWatchedDateDialog';
import { WrongItemDialog } from '../../../components/WrongItemDialog';
import { Item } from '../../../models/Item';
import { StreamingServiceId } from '../../../streaming-services/streaming-services';
import { HistoryListItem } from './HistoryListItem';

interface HistoryListProps {
	items: Item[];
	serviceId: StreamingServiceId | null;
}

export const HistoryList: React.FC<HistoryListProps> = (props: HistoryListProps) => {
	const { items, serviceId } = props;

	return (
		<>
			<List className="history-list">
				{items.map((item) => (
					<HistoryListItem key={item.index} item={item} serviceId={serviceId} />
				))}
			</List>
			<MissingWatchedDateDialog />
			<WrongItemDialog />
		</>
	);
};
