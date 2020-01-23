import React from 'react';
import useGoogleSpreadsheet from 'use-google-spreadsheet';

const Home = ({}) => {
	const { rows, isFetching, addRow, updateRow } = useGoogleSpreadsheet('1eEiKzVs3a4qTvCLRCFfcuo4o5mIOb8eQZbc4wUuxcKo');
	return (
		<div className="">
			{rows?.map(row => {
				return <>{row.name}</>;
			})}
			<style jsx>{``}</style>
		</div>
	);
};

export default Home;
