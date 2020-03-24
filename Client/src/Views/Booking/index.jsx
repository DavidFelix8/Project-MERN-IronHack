import { Link } from 'react-router-dom';

import { list as listBookings } from '../../services/payment-method';

class BookingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: []
    };
    this.fetchData = this.fetchData.bind(this);
  }

  async fetchData() {
    try {
      const bookings = await listBookings();
      this.setState({ bookings });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const bookings = this.state.bookings;
    return (
      <div>
        {/* {<pre>{JSON.stringify(this.state, null, 2)}</pre>} */}

        <h4>Here is your booking section</h4>
        {bookings.map(booking => (
          // console.log()
          <div>
            <span>{booking.service}</span>
            {/*   <ol>
          <h2>You made an appointment at:</h2>
          <li>{booking.date}</li>
          <h2>To the service</h2>
          <li>{booking.service}</li>
        </ol> */}
          </div>
        ))}
        <Link to="/services" className="btn btn-primary">
          Book another Service
        </Link>
      </div>
    );
  }
}
export default BookingView;
