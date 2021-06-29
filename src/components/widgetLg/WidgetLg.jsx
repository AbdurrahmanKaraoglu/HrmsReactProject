import "./widgetLg.css";

export default function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://avatars.githubusercontent.com/u/74272647?s=400&u=5d48bfa58627f417e64727a5a8528e024bb85246&v=4"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Abdurrahman Karaoğlu</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://avatars.githubusercontent.com/u/74272647?s=400&u=5d48bfa58627f417e64727a5a8528e024bb85246&v=4"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Abdurrahman Karaoğlu</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://avatars.githubusercontent.com/u/74272647?s=400&u=5d48bfa58627f417e64727a5a8528e024bb85246&v=4"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Abdurrahman Karaoğlu</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://avatars.githubusercontent.com/u/74272647?s=400&u=5d48bfa58627f417e64727a5a8528e024bb85246&v=4"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Abdurrahman Karaoğlu</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
            </table>
        </div>
    );
}