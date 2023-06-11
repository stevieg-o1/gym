import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import Form from './components/Form';

function App() {
  return (
    <>


      <div id="preloader">
        <div class="sk-three-bounce">
            <div class="sk-child sk-bounce1"></div>
            <div class="sk-child sk-bounce2"></div>
            <div class="sk-child sk-bounce3"></div>
        </div>
      </div>
      <div id="main-wrapper">

        <div class="nav-header">
            <a href="index.html" class="brand-logo">
                <img class="logo-abbr" src="images/logo.png" alt/>
                <img class="logo-compact" src="images/logo-text.png" alt/>
                <img class="brand-title" src="images/logo-text.png" alt/>
          </a>
            <div class="nav-control">
                <div class="hamburger">
                    <span class="line"></span><span class="line"></span><span class="line"></span>
            </div>
          </div>
        </div>


        <div class="header">
            <div class="header-content">
                <nav class="navbar navbar-expand">
                    <div class="collapse navbar-collapse justify-content-between">
                        <div class="header-left">
							<div class="dashboard_bar">
								Workout Plan
							</div>
                        </div>

                        <ul class="navbar-nav header-right">
							<li class="nav-item">
								<div class="input-group search-area d-lg-inline-flex d-none mr-5">
									<input type="text" class="form-control" placeholder="Search here" />
									<div class="input-group-append">
										<span class="input-group-text">
											<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.7871 22.7761L17.9548 16.9437C19.5193 15.145 20.4665 12.7982 20.4665 10.2333C20.4665 4.58714 15.8741 0 10.2333 0C4.58714 0 0 4.59246 0 10.2333C0 15.8741 4.59246 20.4665 10.2333 20.4665C12.7982 20.4665 15.145 19.5193 16.9437 17.9548L22.7761 23.7871C22.9144 23.9255 23.1007 24 23.2816 24C23.4625 24 23.6488 23.9308 23.7871 23.7871C24.0639 23.5104 24.0639 23.0528 23.7871 22.7761ZM1.43149 10.2333C1.43149 5.38004 5.38004 1.43681 10.2279 1.43681C15.0812 1.43681 19.0244 5.38537 19.0244 10.2333C19.0244 15.0812 15.0812 19.035 10.2279 19.035C5.38004 19.035 1.43149 15.0865 1.43149 10.2333Z" fill="#A4A4A4"/></svg>
										</span>
									</div>
								</div>
							</li>
							
							<li class="nav-item dropdown notification_dropdown">
                                <a class="nav-link bell bell-link" href="#">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M22.4605 3.84888H5.31688C4.64748 3.84961 4.00571 4.11586 3.53237 4.58919C3.05903 5.06253 2.79279 5.7043 2.79205 6.3737V18.1562C2.79279 18.8256 3.05903 19.4674 3.53237 19.9407C4.00571 20.4141 4.64748 20.6803 5.31688 20.6811C5.54005 20.6812 5.75404 20.7699 5.91184 20.9277C6.06964 21.0855 6.15836 21.2995 6.15849 21.5227V23.3168C6.15849 23.6215 6.24118 23.9204 6.39774 24.1818C6.5543 24.4431 6.77886 24.6571 7.04747 24.8009C7.31608 24.9446 7.61867 25.0128 7.92298 24.9981C8.22729 24.9834 8.52189 24.8863 8.77539 24.7173L14.6173 20.8224C14.7554 20.7299 14.918 20.6807 15.0842 20.6811H19.187C19.7383 20.68 20.2743 20.4994 20.7137 20.1664C21.1531 19.8335 21.4721 19.3664 21.6222 18.8359L24.8966 7.05011C24.9999 6.67481 25.0152 6.28074 24.9414 5.89856C24.8675 5.51637 24.7064 5.15639 24.4707 4.84663C24.235 4.53687 23.931 4.28568 23.5823 4.11263C23.2336 3.93957 22.8497 3.84931 22.4605 3.84888ZM23.2733 6.60304L20.0006 18.3847C19.95 18.5614 19.8432 18.7168 19.6964 18.8275C19.5496 18.9381 19.3708 18.9979 19.187 18.9978H15.0842C14.5856 18.9972 14.0981 19.1448 13.6837 19.4219L7.84171 23.3168V21.5227C7.84097 20.8533 7.57473 20.2115 7.10139 19.7382C6.62805 19.2648 5.98628 18.9986 5.31688 18.9978C5.09371 18.9977 4.87972 18.909 4.72192 18.7512C4.56412 18.5934 4.4754 18.3794 4.47527 18.1562V6.3737C4.4754 6.15054 4.56412 5.93655 4.72192 5.77874C4.87972 5.62094 5.09371 5.53223 5.31688 5.5321H22.4605C22.5905 5.53243 22.7188 5.56277 22.8353 5.62076C22.9517 5.67875 23.0532 5.76283 23.1318 5.86646C23.2105 5.97008 23.2642 6.09045 23.2887 6.21821C23.3132 6.34597 23.308 6.47766 23.2733 6.60304Z" fill="#555555"/>
										<path d="M7.84173 11.4233H12.0498C12.273 11.4233 12.4871 11.3347 12.6449 11.1768C12.8027 11.019 12.8914 10.8049 12.8914 10.5817C12.8914 10.3585 12.8027 10.1444 12.6449 9.98661C12.4871 9.82878 12.273 9.74011 12.0498 9.74011H7.84173C7.61852 9.74011 7.40446 9.82878 7.24662 9.98661C7.08879 10.1444 7.00012 10.3585 7.00012 10.5817C7.00012 10.8049 7.08879 11.019 7.24662 11.1768C7.40446 11.3347 7.61852 11.4233 7.84173 11.4233Z" fill="#555555"/>
										<path d="M15.4162 13.1066H7.84173C7.61852 13.1066 7.40446 13.1952 7.24662 13.3531C7.08879 13.5109 7.00012 13.725 7.00012 13.9482C7.00012 14.1714 7.08879 14.3855 7.24662 14.5433C7.40446 14.7011 7.61852 14.7898 7.84173 14.7898H15.4162C15.6394 14.7898 15.8535 14.7011 16.0113 14.5433C16.1692 14.3855 16.2578 14.1714 16.2578 13.9482C16.2578 13.725 16.1692 13.5109 16.0113 13.3531C15.8535 13.1952 15.6394 13.1066 15.4162 13.1066Z" fill="#555555"/>
									</svg>
									<span class="badge light text-white bg-primary">5</span>
                                </a>
							</li>
							<li class="nav-item dropdown notification_dropdown">
                                <a class="nav-link" href="#" data-toggle="dropdown">
									<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M23.625 6.12506H22.75V2.62506C22.75 2.47268 22.7102 2.32295 22.6345 2.19068C22.5589 2.05841 22.45 1.94819 22.3186 1.87093C22.1873 1.79367 22.0381 1.75205 21.8857 1.75019C21.7333 1.74832 21.5831 1.78629 21.4499 1.86031L14 5.99915L6.55007 1.86031C6.41688 1.78629 6.26667 1.74832 6.11431 1.75019C5.96194 1.75205 5.8127 1.79367 5.68136 1.87093C5.55002 1.94819 5.44113 2.05841 5.36547 2.19068C5.28981 2.32295 5.25001 2.47268 5.25 2.62506V6.12506H4.375C3.67904 6.12582 3.01181 6.40263 2.51969 6.89475C2.02757 7.38687 1.75076 8.0541 1.75 8.75006V11.3751C1.75076 12.071 2.02757 12.7383 2.51969 13.2304C3.01181 13.7225 3.67904 13.9993 4.375 14.0001H5.25V23.6251C5.25076 24.321 5.52757 24.9882 6.01969 25.4804C6.51181 25.9725 7.17904 26.2493 7.875 26.2501H20.125C20.821 26.2493 21.4882 25.9725 21.9803 25.4804C22.4724 24.9882 22.7492 24.321 22.75 23.6251V14.0001H23.625C24.321 13.9993 24.9882 13.7225 25.4803 13.2304C25.9724 12.7383 26.2492 12.071 26.25 11.3751V8.75006C26.2492 8.0541 25.9724 7.38687 25.4803 6.89475C24.9882 6.40263 24.321 6.12582 23.625 6.12506ZM21 6.12506H17.3769L21 4.11256V6.12506ZM7 4.11256L10.6231 6.12506H7V4.11256ZM7 23.6251V14.0001H13.125V24.5001H7.875C7.64303 24.4998 7.42064 24.4075 7.25661 24.2434C7.09258 24.0794 7.0003 23.857 7 23.6251ZM21 23.6251C20.9997 23.857 20.9074 24.0794 20.7434 24.2434C20.5794 24.4075 20.357 24.4998 20.125 24.5001H14.875V14.0001H21V23.6251ZM24.5 11.3751C24.4997 11.607 24.4074 11.8294 24.2434 11.9934C24.0794 12.1575 23.857 12.2498 23.625 12.2501H4.375C4.14303 12.2498 3.92064 12.1575 3.75661 11.9934C3.59258 11.8294 3.5003 11.607 3.5 11.3751V8.75006C3.5003 8.51809 3.59258 8.2957 3.75661 8.13167C3.92064 7.96764 4.14303 7.87536 4.375 7.87506H23.625C23.857 7.87536 24.0794 7.96764 24.2434 8.13167C24.4074 8.2957 24.4997 8.51809 24.5 8.75006V11.3751Z" fill="#555555"/>
									</svg>
									<span class="badge light text-white bg-primary">2</span>
                                </a>
								<div class="dropdown-menu dropdown-menu-right">
									<div id="DZ_W_TimeLine02" class="widget-timeline dz-scroll style-1 ps ps--active-y p-3 height370">
                                    <ul class="timeline">
                                        <li>
                                            <div class="timeline-badge primary"></div>
                                            <a class="timeline-panel text-muted" href="#">
                                                <span>10 minutes ago</span>
                                                <h6 class="mb-0">Youtube, a video-sharing website, goes live <strong class="text-primary">$500</strong>.</h6>
                                            </a>
                                        </li>
                                        <li>
                                            <div class="timeline-badge info">
                                            </div>
                                            <a class="timeline-panel text-muted" href="#">
                                                <span>20 minutes ago</span>
                                                <h6 class="mb-0">New order placed <strong class="text-info">#XF-2356.</strong></h6>
												<p class="mb-0">Quisque a consequat ante Sit amet magna at volutapt...</p>
                                            </a>
                                        </li>
                                        <li>
                                            <div class="timeline-badge danger">
                                            </div>
                                            <a class="timeline-panel text-muted" href="#">
                                                <span>30 minutes ago</span>
                                                <h6 class="mb-0">john just buy your product <strong class="text-warning">Sell $250</strong></h6>
                                            </a>
                                        </li>
                                        <li>
                                            <div class="timeline-badge success">
                                            </div>
                                            <a class="timeline-panel text-muted" href="#">
                                                <span>15 minutes ago</span>
                                                <h6 class="mb-0">StumbleUpon is acquired by eBay. </h6>
                                            </a>
                                        </li>
                                        <li>
                                            <div class="timeline-badge warning">
                                            </div>
                                            <a class="timeline-panel text-muted" href="#">
                                                <span>20 minutes ago</span>
                                                <h6 class="mb-0">Mashable, a news website and blog, goes live.</h6>
                                            </a>
                                        </li>
                                        <li>
                                            <div class="timeline-badge dark">
                                            </div>
                                            <a class="timeline-panel text-muted" href="#">
                                                <span>20 minutes ago</span>
                                                <h6 class="mb-0">Mashable, a news website and blog, goes live.</h6>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
								</div>
							</li>
                            <li class="nav-item dropdown header-profile">
                                <a class="nav-link" href="#" role="button" data-toggle="dropdown">
                                    <img src="17.jpg" width="20" alt />
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a href="./app-profile.html" class="dropdown-item ai-icon">
                                        <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" class="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                        <span class="ml-2">Profile </span>
                                    </a>
                                    <a href="./email-inbox.html" class="dropdown-item ai-icon">
                                        <svg id="icon-inbox" xmlns="http://www.w3.org/2000/svg" class="text-success" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                        <span class="ml-2">Inbox </span>
                                    </a>
                                    <a href="./page-login.html" class="dropdown-item ai-icon">
                                        <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" class="text-danger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                                        <span class="ml-2">Logout </span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

        <div class="deznav">
            <div class="deznav-scroll">
				<ul class="metismenu" id="menu">
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i class="flaticon-381-networking"></i>
							<span class="nav-text">Dashboard</span>
						</a>
                        
                    </li>
                  
                </ul>
				<div class="drum-box">
					<img src="images/drump.png" alt/>
					<p class="fs-18 font-w500 mb-4">Start Plan Your Workout</p>
					<a class href="javascript:;">Check schedule
					<svg class="ml-3" width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 12L6 6L0 0" fill="#BCD7FF"/>
					</svg>
					</a>
				</div>
				<div class="copyright">
					<p><strong>Steve Fitness Admin Dashboard</strong> ©All Rights Reserved</p>
					<p>by Steve</p>
          </div>
        </div>
        </div>



        <div class="content-body">
			<div class="container-fluid">
                <div class="row">
					<div class="col-xl-3 col-xxl-4">
						<div class="row">
							<div class="col-xl-12">
								<div class="card flex-xl-column flex-md-row flex-column">
									<div class="card">
										<div class="card-header">
											<h4 class="card-title">Add Users</h4>
                                            </div>
										<div class="card-body">
											<div class="basic-form">
														
													
													
													
													
														{/* <!-- POST USER DATA $$$$$$$$$$$$$$ --> */}
												<form>
													<div class="form-group row">
														<label class="col-sm-3 col-form-label">Name</label>
														<div class="col-sm-9">
															<input type="text" class="form-control" placeholder="name"/>
                                </div>
								</div>
													<div class="form-group row">
														<label class="col-sm-3 col-form-label">Email</label>
														<div class="col-sm-9">
															<input type="email" class="form-control" placeholder="email"/>
                                </div>
                    </div>
													<div class="form-group row">
														<label class="col-sm-3 col-form-label">Age</label>
														<div class="col-sm-9">
															<input type="number" class="form-control" placeholder="age"/>
            </div>
        </div>
		                                               <div class="form-group row">
														<label class="col-sm-3 col-form-label">Period</label>
														<div class="col-sm-9">
															<input type="number" class="form-control" placeholder="period"/>
            </div>
        </div>
													<div class="form-group row">
														<div class="col-sm-10">
															<button type="submit" class="btn btn-primary">Add User</button>
				</div>
													</div>
												</form>
											</div>
										</div>
									</div>
									<div class="card-body">
										<h6 class="fs-16 text-black mb-4">Next week plan</h6>
										<div class="d-flex mb-4 align-items-center">
											<span class="date-icon mr-3">3</span>
											<div>
												<h6 class="fs-16"><a href="workout-statistic.html" class="text-black">Cardio Exercise</a></h6>
												<span>12 Sets | 16mins</span>
											</div>
										</div>
										<div class="d-flex mb-4 align-items-center">
											<span class="date-icon mr-3">5</span>
											<div>
												<h6 class="fs-16"><a href="workout-statistic.html" class="text-black">Cycling Routine</a></h6>
												<span>20Km target distances</span>
											</div>
										</div>
										<div class="d-flex mb-4 align-items-center">
											<span class="date-icon mr-3">16</span>
											<div>
												<h6 class="fs-16"><a href="workout-statistic.html" class="text-black">Cycling Routine</a></h6>
												<span>20Km target distances</span>
											</div>
										</div>
										<a href="javascript:void(0);" data-toggle="modal" data-target="#addNewPlan" class="btn btn-outline-primary rounded">Add New Plan</a>
										<div class="modal fade" id="addNewPlan">
											<div class="modal-dialog modal-dialog-centered" role="document">
												<div class="modal-content">
													<div class="modal-header">
														<h5 class="modal-title">Add New Plan</h5>
														<button type="button" class="close" data-dismiss="modal"><span>×</span>
														</button>
													</div>
													<div class="modal-body">
												
														
														<form>
															<div class="form-group">
																<label>Running</label>
																<input type="text" class="form-control" placeholder="Km"/>
															</div>
															<div class="form-group">
																<label>Cycling</label>
																<input type="text" class="form-control" placeholder="Km"/>
															</div>
															<div class="form-group">
																<label>Yoga</label>
																<input type="text" class="form-control" placeholder="hr"/>
															</div>
															<button class="btn btn-primary">Submit</button>
														</form>




													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-9 col-xxl-8">
						<div class="row">
							<div class="col-xl-12">
								<div class="card plan-list">
									<div class="card-header d-sm-flex d-block pb-0 border-0">
										<div class="mr-auto pr-3">
											<h4 class="text-black fs-20">Plan List</h4>
											<p class="fs-13 mb-0 text-black">Perfect workouts with StevieG</p>
										</div>
										<a href="javascript:void(0);" class="btn rounded text-black border border-light mr-4">
										<svg class="mr-2" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M3.31615 6H14.4744C14.4744 6.53043 14.6882 7.03914 15.0686 7.41421C15.4491 7.78929 15.9651 8 16.5032 8H18.532C19.07 8 19.5861 7.78929 19.9665 7.41421C20.347 7.03914 20.5607 6.53043 20.5607 6H21.5751C21.8442 6 22.1022 5.89464 22.2924 5.70711C22.4827 5.51957 22.5895 5.26522 22.5895 5C22.5895 4.73478 22.4827 4.48043 22.2924 4.29289C22.1022 4.10536 21.8442 4 21.5751 4H20.5607C20.5607 3.46957 20.347 2.96086 19.9665 2.58579C19.5861 2.21071 19.07 2 18.532 2H16.5032C15.9651 2 15.4491 2.21071 15.0686 2.58579C14.6882 2.96086 14.4744 3.46957 14.4744 4H3.31615C3.04711 4 2.7891 4.10536 2.59887 4.29289C2.40863 4.48043 2.30176 4.73478 2.30176 5C2.30176 5.26522 2.40863 5.51957 2.59887 5.70711C2.7891 5.89464 3.04711 6 3.31615 6ZM16.5032 4H18.532V5V6H16.5032V4ZM21.5751 11H12.4456C12.4456 10.4696 12.2319 9.96086 11.8514 9.58579C11.471 9.21071 10.9549 9 10.4169 9H8.38809C7.85002 9 7.334 9.21071 6.95353 9.58579C6.57306 9.96086 6.35931 10.4696 6.35931 11H3.31615C3.04711 11 2.7891 11.1054 2.59887 11.2929C2.40863 11.4804 2.30176 11.7348 2.30176 12C2.30176 12.2652 2.40863 12.5196 2.59887 12.7071C2.7891 12.8946 3.04711 13 3.31615 13H6.35931C6.35931 13.5304 6.57306 14.0391 6.95353 14.4142C7.334 14.7893 7.85002 15 8.38809 15H10.4169C10.9549 15 11.471 14.7893 11.8514 14.4142C12.2319 14.0391 12.4456 13.5304 12.4456 13H21.5751C21.8442 13 22.1022 12.8946 22.2924 12.7071C22.4827 12.5196 22.5895 12.2652 22.5895 12C22.5895 11.7348 22.4827 11.4804 22.2924 11.2929C22.1022 11.1054 21.8442 11 21.5751 11ZM8.38809 13V11H10.4169V12V13H8.38809ZM21.5751 18H18.532C18.532 17.4696 18.3182 16.9609 17.9378 16.5858C17.5573 16.2107 17.0413 16 16.5032 16H14.4744C13.9364 16 13.4203 16.2107 13.0399 16.5858C12.6594 16.9609 12.4456 17.4696 12.4456 18H3.31615C3.04711 18 2.7891 18.1054 2.59887 18.2929C2.40863 18.4804 2.30176 18.7348 2.30176 19C2.30176 19.2652 2.40863 19.5196 2.59887 19.7071C2.7891 19.8946 3.04711 20 3.31615 20H12.4456C12.4456 20.5304 12.6594 21.0391 13.0399 21.4142C13.4203 21.7893 13.9364 22 14.4744 22H16.5032C17.0413 22 17.5573 21.7893 17.9378 21.4142C18.3182 21.0391 18.532 20.5304 18.532 20H21.5751C21.8442 20 22.1022 19.8946 22.2924 19.7071C22.4827 19.5196 22.5895 19.2652 22.5895 19C22.5895 18.7348 22.4827 18.4804 22.2924 18.2929C22.1022 18.1054 21.8442 18 21.5751 18ZM14.4744 20V18H16.5032V19V20H14.4744Z" fill="black"/>
										</svg>
										Filter</a>
										<div class="dropdown mt-sm-0 mt-3">
											<button type="button" class="btn rounded border text-black border-light dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
												Unfinished
											</button>
											<div class="dropdown-menu dropdown-menu-right">
												<a class="dropdown-item" href="javascript:void(0);">Link 1</a>
												<a class="dropdown-item" href="javascript:void(0);">Link 2</a>
												<a class="dropdown-item" href="javascript:void(0);">Link 3</a>
											</div>
										</div>
									</div>
									<div class="card-body">
										






 									{/* SHOW FITNESS   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  */}
										
										<div class="d-flex px-3 pt-3 list-row flex-wrap align-items-center mb-2">
											<div class="list-icon mr-3 mb-3">
												<p class="fs-24 text-black mb-0 mt-2">28</p>
												<span class="fs-14 text-black">Fri</span>
											</div>
											<div class="info mb-3">
												<h4 class="fs-20 "><a href="workout-statistic.html" class="text-black">Weekly Routine Cycling</a></h4>
												<span class="text-primary font-w600">FINISHED</span><span class="pl-3 pr-3">34Km</span><span>00:23:45”</span>
											</div>
											<div class="d-flex mb-3 mr-auto pl-3 pr-3 align-items-center">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g clip-path="url(#clip4)">
													<path d="M10.8586 5.22605L5.87121 10.5543C5.50758 11.0846 5.64394 11.8069 6.17172 12.1679L11.1945 15.6099L11.1945 18.9559C11.1945 19.5922 11.6995 20.1251 12.3359 20.1377C12.9874 20.1477 13.5177 19.625 13.5177 18.9761L13.5177 15.0013C13.5177 14.6175 13.3283 14.2589 13.0126 14.0443L9.79041 11.8347L12.5025 8.95843L13.8914 12.1226C14.0758 12.5443 14.4949 12.817 14.9546 12.817L19.1844 12.817C19.8207 12.817 20.3536 12.312 20.3662 11.6756C20.3763 11.0241 19.8536 10.4938 19.2046 10.4938L15.7172 10.4938C15.2576 9.4483 14.7677 8.41295 14.3409 7.35234C14.1237 6.81699 14.0025 6.58466 13.6036 6.21598C13.5227 6.14022 12.9596 5.62507 12.4571 5.16547C11.995 4.74625 11.2828 4.77403 10.8586 5.22605Z" fill="#1EA7C5"/>
													<path d="M15.6162 5.80688C17.0861 5.80688 18.2778 4.61523 18.2778 3.14526C18.2778 1.67529 17.0861 0.483643 15.6162 0.483643C14.1462 0.483643 12.9545 1.67529 12.9545 3.14526C12.9545 4.61523 14.1462 5.80688 15.6162 5.80688Z" fill="#1EA7C5"/>
													<path d="M4.89899 23.5165C7.60463 23.5165 9.79798 21.3231 9.79798 18.6175C9.79798 15.9118 7.60463 13.7185 4.89899 13.7185C2.19335 13.7185 -1.81927e-07 15.9118 -2.13831e-07 18.6175C-2.45735e-07 21.3231 2.19335 23.5165 4.89899 23.5165Z" fill="#1EA7C5"/>
													<path d="M19.101 23.5165C21.8066 23.5165 24 21.3231 24 18.6175C24 15.9118 21.8066 13.7185 19.101 13.7185C16.3954 13.7185 14.202 15.9118 14.202 18.6175C14.202 21.3231 16.3954 23.5165 19.101 23.5165Z" fill="#1EA7C5"/>
													</g>
													<defs>
													<clippath id="clip4">
													<rect width="24" height="24" fill="white"/>
													</clippath>
													</defs>
												</svg>
												<span class="text-info ml-2">Cycling</span>
											</div>
											<a href="javascript:void(0);" class="btn btn-outline-primary rounded mr-3 mb-3"><i class="las la-caret-right scale-2 mr-3"></i>Start Workout</a>
											<div class="dropdown mb-3">
												<button type="button" class="btn rounded border-light" data-toggle="dropdown" aria-expanded="false">
													<svg width="6" height="26" viewBox="0 0 6 26" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z" fill="#585858"/>
														<path d="M6 13C6 14.6569 4.65685 16 3 16C1.34315 16 0 14.6569 0 13C0 11.3431 1.34315 10 3 10C4.65685 10 6 11.3431 6 13Z" fill="#585858"/>
														<path d="M6 23C6 24.6569 4.65685 26 3 26C1.34315 26 0 24.6569 0 23C0 21.3431 1.34315 20 3 20C4.65685 20 6 21.3431 6 23Z" fill="#585858"/>
													</svg>
												</button>
												<div class="dropdown-menu dropdown-menu-right">
													<a class="dropdown-item" href="javascript:void(0);">Edit</a>
													<a class="dropdown-item" href="javascript:void(0);">Delete</a>
												</div>
											</div>
										</div>







									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
        </div>
      

        <div class="footer">
            <div class="copyright">
                <p>Copyright © Designed & Developed by <a href="http://Steve.com/" target="_blank">Steve</a> 2023</p>
            </div>
        </div>
        


      </div>

    </>
  );
}

export default App;
