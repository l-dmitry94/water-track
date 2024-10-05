import Tracker from '@/components/shared/Tracker';

const TrackerDatePage = ({ params }: { params: { currentDate: string } }) => {
    const { currentDate } = params;

    return <Tracker currentDate={currentDate} />;
};

export default TrackerDatePage;
