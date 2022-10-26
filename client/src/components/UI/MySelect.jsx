function MySelect({ defaultValue, data, register, error }) {
	return (
		<>
			<select
				{...(register && register())}
			>
				<option value="">{defaultValue}</option>
				{data.map((d, i) => (
					<option key={i} value={d}>{d}</option>
				))}
			</select>
			{error && <p className="font-normal text-red-500">{error}</p>}
		</>
	)
}
export default MySelect;