## TỔNG KẾT
BÀI THỰC HÀNH 02
+ Tạo component Application (không được đặt là App vì App sẽ không gọi được App)
+ Tạo component Button
+ Trong Application, gọi Button
+ Trong Button, xác định các thông tin cần được nhận
+ Trong Application, định nghĩa các thông tin cần truyền và tiến hành truyền bằng props
__Trong bài này chỉ cần truyền thông tin thôi nên có thể định nghĩa thông tin và truyền trực tiếp, hoặc nếu đóng gói vào trong một object rồi truyền thì có thể truyền nguyên object đó rồi sang component button lại trích xuất ra.__
BÀI THỰC HÀNH 03
+ Tạo component Button
+ Bài này chỉ tương tác bên trong phạm vi component nên chỉ cần dùng tới state chứ không cần dùng props
+ Do cần khai báo state nên cần gọi khai báo constructor
+ Do không cần nhận đầu vào (props) từ nơi nào khác nên phần tham số của constructor cũng như super để trống
+ Khai báo state là một object với một key:value là count: 0 (đây là giá trị ban đầu)
+ Khai báo giao diện cần hiện ra bao gồm 1 thẻ p để hiện kết quả và một thẻ button để có 1 nút cho người dùng tương tác có tên là Click me
+ Gán cho nút một hàm xử lý sự kiện bằng onClick, có tên là handleClick, do đây là trong Class Component và phạm vi là bên trong component này nên cần viết là this.handleClick
+ Lên khai báo hàm xử lý sự kiện, viết bằng arrow function để không phải binding từ khóa this, bên trong nội dung hàm này, gọi tới phương thức có sẵn của Component là this.setState trong đó gán lại giá trị state là một object có chứa 1 cặp key:value là count:this.state.count + 1
+ Cuối cùng để kết quả hiện thị ra nội dung của thẻ p, cần dùng phép nội suy và trỏ tới this.state.count
BÀI THỰC HÀNH 04
+ Trùng với bài thực hành 03, nhưng viết bằng binding nên tạm thời bỏ qua (về làm bài khác)
+ Làm một bài nhấn 1 nút nhưng check hết các input/gỡ hết các input
[ ] Phân tích lại logic làm toggle
BÀI THỰC HÀNH 05
__Luồng và nguyên lý để lấy được dữ liệu từ các input trong ReactJS__
+ inputValue được khai báo trong this.state là giá trị cần dùng để hiển thị ra ngoài, trong trường hợp này sẽ dùng để hiển thị ra ô input và hiển thị ra alert
+ alert thì dễ hiểu rồi nhưng tại sao lại là ra ô input?
+ Ở đây do đặc tính của ReactJS là mỗi khi state thay đổi thì component sẽ được render lại [...], do đó ngoại trừ xử lý sự kiện onClick/onSubmit với nút (button) còn cần xử lý sự kiện onChange nữa.
+ state cần theo dõi tất cả những thay đổi dù là nhỏ nhất của component để hiển thị cho đúng, và trong trường hợp này là khi người dùng nhập dữ liệu, với mỗi thao tác của người dùng đối với ô input, cần phải thiết lập một cơ chế để không ngừng cập nhật state
+ (1) mỗi lần dữ liệu trong ô input thay đổi thì giá trị này sẽ được cập nhật lên state, tức là inputValue sẽ cần được gán bằng e.target.value, với e là sự kiện onChange
+ (2) để mỗi lần render lại, component được hiển thị đúng, trong trường hợp này là hiển thị đúng state đã được cập nhật trước đó, thì giá trị của thuộc tính value đối với input tương ứng sẽ cần phải được đặt thành this.state.inputValue
+ (3) một phần khác là xử lý khi sự kiện khi nhấn vào nút, lần này chỉ cần lấy từ state và hiển thị ra (trong trường hợp này là alert), set lại giá trị bằng rỗng ("")
BÀI THỰC HÀNH 06
BÀI THỰC HÀNH 07
[　]　Xử lý một vấn đề đó là vô hiệu hóa nút Change khi toggle ẩn nội dung đi, nếu không thì ẩn nội dung đi vẫn có thể thay đổi được thì hơi lạ và phi logic.