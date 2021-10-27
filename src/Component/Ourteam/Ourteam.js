import React from 'react'
import Heading from './Heading'
import { Main, Rowcolumn33 } from './Ourteam.element'
import Teampeople from './Teampeople'

import { Link } from 'react-router-dom'
function Ourteam() {

    


    return (
        <Main>
           {/* <Teamimage></Teamimage>  */}
           <Heading/>
           <Rowcolumn33>
              <Link to='/Director' style={{textDecoration:'none'}}>  <Teampeople image='https://lh3.googleusercontent.com/RJ81seMIY81Zm8czXt4NczMWRnTf9tULIUwO8Vnt62dLpvBo28ZR0NA0YdXUn7yU_4fppH4o3PAsfvkmKENlUh22_iw1gi-wNkc1u0QVjnp-G1DVueIC7t6j08qfnGCaB3utJubci-8E5sVGkXrfgN8Iw9XkEep3kVIHb3UA7a5BSRb9piRDWcN8iDnAFE9ZML7fGaR8F1mP-FmqD3oytCnjmmYdtY-HCk9LX98dSzp07OD3qw6QZghDUarf5AJqNBl8z4iCnod1lxOXBjMdRKTdmLpnNIaoJGuEUmoSAwjg8CEAT5G-VckjjE4d9G2hRb8QsGzvBusmZrsxRLOAWihvoed19pQztBKyWClil8ginAsQG8oFz7s_F1kvw5DpQpEQgPdkI6Dk_WLFaykE4xu-qIxImM9jMBAtwUDkeOQzti6_rAXk6OBNJ0AaDZBJF76-xhNbCuOIG66OSWHK3s5_p_AZvoOa0w6QCz2SvVsroqQHBHSl5M-x2NTNlw7w_WgrETOwm8io_JKUy9oOOZYvMqI9jAxPtHHzCu_FJhF6hhjwHPwTT78lM5u8xKMdk_KIh8mC_GVm-Y8Htdn_XxvJSOKQGVnoaKpWF8x7u3DgI-Ngnpfssfag-jOZBuATMklkU7ZW_fBPwOHkOfKh5qZDf53HNccgSSAaQ5li0bLD45GvV_Fyw62uj3M-RLg7QZ_Ysd6fzEwj8pdMZjevDek=w1163-h775-no?authuser=0' name='Sarita Budana' designation='Director' /></Link>
      
              <Link to='/Md'  style={{textDecoration:'none'}}>  <Teampeople image='https://lh3.googleusercontent.com/pLoX9x9TEl-z6FGdTr4pIxOACnJ5PhNO9Jno7BDW1kdmK3Tt_yISg055vPjIxAelCvL_RB9fMjNQh7x2xLCviB30KBpv_Mcio0maiPO1IXGAfeiaeEZUDOSSAed479qAg5NRoSwxa54h_vbC016f2CJ-lI5GYc0dW7ukCHv0otJofCms03nRIE2pE8xs_OSw8FVWrLw6UzY2A1zr_dL4_vDmcJ98SpbIk87BKvl6QXn7d7XaH_kJAZ9Htw8XUJWTApktawZZ_gR86FaYaB7FiLZwdy1WCP0ZLtAMPe9DlgH_8s4gMa8aplDaBDok3A2Gv3s1hKP8ViuWWFyfRc-mBXnOc6VToMG9BleB-JRqvQQ4OhgEsh14rSRvNAStVDuzIQdyb4cJLZqLGDam4W0NPijeWsVkj-tDMG8WvBL2mTqD21X0XtO700oHfH9vk9Qv1Gpr6BENqguV66MUxLPc3HTQZazneXJAwsD_SKln2GcL79eI4SjJZlphyKA3yfRPqw3qfLXCnwN833xuH4FxzWU_FzovO5qvD1FyiConFQtrMZYMJUWVxtb1OVx5dydDabuYSnVYPL0uOyz9D4PV4y97OZsOeoRTZnEPhRxmwoGvbZNa6Ui-r97Th9RK-YQD3A7Zf-pIOOJJaKkDZK4txr-HCzTmEvndvi4gfmRkpKOdZW2Dc_xR2mVygJg50uzWbprT6xD-ubEwNGcZfus9XZQ=w330-h220-no?authuser=0' name='Ratna Kusumakar' designation='Managing Director'/></Link>
      
              <Link to='/president'  style={{textDecoration:'none'}}>  <Teampeople image='https://lh3.googleusercontent.com/Ral9SGGmYPTlJussHxS0Ho03I3wjW557hSGmkcqQkQu3a4a9YF0sghaWClw9Pc0N7JDlpVk4dmWWFQK_juLaRX9vNGbHOLmRjgDOzxsijkAIR9M02zfROgfF1PyLJ1qGJY-BxNNsQaWExaU1S6Pg6NaZtTN4tb-FjADsf0_8RcjnvGVLgJ6sybXwWempW1ZkVFa_shcDyKGzTXYqVoBoIhhKNkXzQuI_YY4MUeRj7yiz3xpZFksAWXAp8doywJmM5hWnkhhyKoiRPwkHcy-18lHCdKDlIrnZPAB9AoWVOYEGDsC3OnjVeB8LgAxWk_uxxfNF1VzbKMmFk7Lww-wEaJb1lo9GeYOC4HRggHlU0Wcn6TpqD32Krbi4CRY1sGxLCQRthyDfnFEGenKbRH0x7iVSIcJTou3kFtlXkxSUiECtxWJOLf1tOWvyZKmCb5lkQXzCX4FCoiNcLSH9RFvkNuCukVpTMaUYD98BUA_ayefaHPzRU-7DN5xhJmdWd9tJ6ENbnotkT2OTBOYPUQrWD0X1fWM3_hYbBIvI3j5Px52q__6dFf_NkFQIDUtlS4cQeWoVzn_poiq5FZ-VDxtt-RhtevhMlTJ7FlVIuGl91MZ3XadYl2jSI_XFlRQ8negFRgvHjwKY8luH5Wzqg4qiegQZBzA7PsUJUn0AxtEgiKE77fCw-umF1B5oTULro8XNHxEVMjyZ4qgNl3Gh3GrqwtY=w1454-h969-no?authuser=0' name='Deepak Kusumakar' designation='President'/></Link>
      
              <Link to='/principal'  style={{textDecoration:'none'}}>  <Teampeople image='https://lh3.googleusercontent.com/zQ3SGQa6ht-n6l5UsaHDd3ucg3HzRure_Kj2URaZI9Yaw2zqYep-BpBbL3irDgie5uNB9e9mc5x2FdF3MhJLWNg35AuGYh_fn3OngX6hEKiH50rV-H6vQmJpAqLfDQllw6TphjbJLZzGe-x62-DGs0-o__j5s8s7A29wskABsR-f-1ao6oi6FmI0CukmDy1fDub4Ooj0x_Sz4Ad3zOQH_k2MwbLFG3bPz5qNNctZy8KXFer-CVIrm100TRkofhX_Sss40l8i8MjnFA-u6RYcYXz1Syj2Vnb84Lrc2FXG7jHt2p0xCia5mFKbNbjq_Z8GO5qkCV3snGlqWDWoWaTi7rv9Gwolx5TP1Dyq-8_tSwqQ43YLIY0G8GRPk3gO0CLvfW-z_6fJLGY0abWQdueH56I15SfnvwrCiI8B65N6djG2tJCQy9ibxaySlvdYBEYa7KAvwmxs1Ngy3Tngi5rQrKi4YMyh2ABYpCZVjGSmC5B5b-372W6NHmrcdjXZONPMiqvU18Ms8QD5qJLe4eRL-sAzwpJAkMJawUTjCKTQAmmHvJE8gmmNY7NCp7fSj_PiW1uPJExX8kwC6yElhvJp16OCnEeXK7frcvojO6WZ6FpfFlECb-Lh1i9xnD6mvm341Hdzv4TfM350OJgITGIuniVMeu698w2OTKBigd0RX7pQMsNRr96Hj3O90bi71dfC-8rL8cAUWGtY42RYQKpL9-g=w1454-h969-no?authuser=0' name='Dyuti Sardesai' designation='Principal'/></Link>
              
      
             
      
              
               
            
           </Rowcolumn33>
        </Main>
    )
}

export default Ourteam
