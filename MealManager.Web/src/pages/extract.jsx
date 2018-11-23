import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import SideBar from "../components/common/sidebar";

class Extract extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {

        };
    }

    render() {

        return (
            <div class="section sm">

                <div class="container">

                    <div class="row">

                        <SideBar></SideBar>

                        <div class="col-sm-8 col-md-9">

                            <div class="job-detail-wrapper">

                                <br /><br />
                                <div class="job-detail-header bb mb-30">

                                    <h2 class="heading mb-15">Extra</h2>

                                    {/* <div class="meta-div clearfix mb-25">
                                        <span>at <a href="#">Expedia</a> as </span>
                                        <span class="job-label label label-success">Freelance</span>
                                    </div> */}

                                </div>

                                <div class="apply-job-wrapper">

                                    <div id="apply-job-toggle" class="collapse">

                                        <div class="collapse-inner clearfix">

                                            <div class="apply-job-inner">

                                                <h3 class="heading mb-5">Apply for Audio Visual Field Engineer</h3>
                                                <p>Have a findJob.com account? <a href="#">Sign in</a> now and we'll
                                                    pre-fill this application for you.</p>

                                                <div class="bg-light padding-30">

                                                    <form>

                                                        <div class="row">

                                                            <div class="col-sm-6 col-md-4">
                                                                <div class="form-group">
                                                                    <label>First name:</label>
                                                                    <input type="text" class="form-control" />
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-6 col-md-4">
                                                                <div class="form-group">
                                                                    <label>Last name:</label>
                                                                    <input type="text" class="form-control" />
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-12 col-md-4">
                                                                <div class="form-group">
                                                                    <label>Email address:</label>
                                                                    <input type="email" class="form-control" />
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <hr class="mt-15" />

                                                        <h4 class="heading">Add your CV</h4>

                                                        <div class="row">

                                                            <div class="col-sm-12 col-md-8">
                                                                <div class="form-group">
                                                                    <label>Upload from your computer</label>
                                                                    <input type="file" class="file-input" />
                                                                </div>
                                                            </div>


                                                            <div class="col-sm-12 col-md-12">
                                                                <div class="form-group">
                                                                    <label>Or import from cloud storage</label>
                                                                    <div class="clear"></div>
                                                                    <button class="btn btn-primary"><i class="zmdi zmdi-google-drive"></i>
                                                                        Google Drive</button>
                                                                    <button class="btn btn-primary"><i class="zmdi zmdi-dropbox"></i>
                                                                        Dropbox</button>
                                                                    <button class="btn btn-primary"><i class="zmdi zmdi-google-drive"></i>
                                                                        OneDrive</button>
                                                                </div>

                                                                <p class="font12 line12 mb-10">Your CV must be a .doc,
                                                                    .pdf, .docx, .rtf, and no bigger than 1Mb</p>
                                                            </div>

                                                        </div>

                                                        <hr class="mt-15" />

                                                        <div class="row">

                                                            <div class="col-sm-12 col-md-6">
                                                                <div class="form-group">
                                                                    <label>Your covering message for Audio Visual Field
                                                                        Engineer</label>
                                                                    <textarea class="form-control" rows="6"></textarea>
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-12 col-md-12 mb-15">
                                                                <p class="mb-5">Effects present letters inquiry no an
                                                                    removed or friends?</p>
                                                                <div class="radio-block">
                                                                    <input id="q1_radio-1" name="q1_radio" type="radio" class="radio" value="First Choice" />
                                                                    <label class="font13" for="q1_radio-1">Yes</label>
                                                                </div>
                                                                <div class="radio-block">
                                                                    <input id="q1_radio-2" name="q1_radio" type="radio" class="radio" value="First Choice" />
                                                                    <label class="font13" for="q1_radio-2">no</label>
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-12 col-md-12 mb-15">
                                                                <p class="mb-5">My possible peculiar together to.
                                                                    Desire so better am cannot he up before points.
                                                                    Remember mistaken opinions it pleasure of debating?</p>
                                                                <div class="radio-block">
                                                                    <input id="q2_radio-1" name="q2_radio" type="radio" class="radio" value="First Choice" />
                                                                    <label class="font13" for="q2_radio-1">Yes</label>
                                                                </div>
                                                                <div class="radio-block">
                                                                    <input id="q2_radio-2" name="q2_radio" type="radio" class="radio" value="First Choice" />
                                                                    <label class="font13" for="q2_radio-2">no</label>
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-12 col-md-12 mb-15">
                                                                <p class="mb-5">Bringing so sociable felicity supplied
                                                                    mr. September suspicion far him two acuteness
                                                                    perfectly?</p>
                                                                <div class="checkbox-block">
                                                                    <input id="q3_checkbox-1" name="q3_checkbox" type="checkbox" class="checkbox" value="First Choice" />
                                                                    <label class="font13" for="q3_checkbox-1">Assurance
                                                                        perpetual</label>
                                                                </div>
                                                                <div class="checkbox-block">
                                                                    <input id="q3_checkbox-2" name="q3_checkbox" type="checkbox"
                                                                        class="checkbox" value="First Choice" />
                                                                    <label class="font13" for="q3_checkbox-2">Entire
                                                                        its the did figure</label>
                                                                </div>
                                                                <div class="checkbox-block">
                                                                    <input id="q3_checkbox-3" name="q3_checkbox" type="checkbox"
                                                                        class="checkbox" value="First Choice" />
                                                                    <label class="font13" for="q3_checkbox-3">Shade
                                                                        being under his bed</label>
                                                                </div>
                                                                <div class="checkbox-block">
                                                                    <input id="q3_checkbox-4" name="q3_checkbox" type="checkbox"
                                                                        class="checkbox" value="First Choice" />
                                                                    <label class="font13" for="q3_checkbox-4">Pleasant
                                                                        horrible but confined</label>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <hr class="mt-5" />

                                                        <div class="checkbox-block mb-15">
                                                            <input id="newsletter_checkbox" name="newsletter_checkbox"
                                                                type="checkbox" class="checkbox" value="First Choice" />
                                                            <label class="" for="newsletter_checkbox">Email me jobs
                                                                like this one when they become available</label>
                                                        </div>

                                                        <p class="font12 line16">Manor we shall merit by chief wound no
                                                            or would. Oh towards between subject passage sending
                                                            mention or it. Sight happy do burst fruit to woody begin
                                                            at. <a href="#">Assurance perpetual</a> he in oh determine
                                                            as. The year paid met him does eyes same. Own marianne
                                                            improved sociable not out. Thing do sight blush mr an.
                                                            Celebrated am announcing <a href="#">delightful remarkably</a>
                                                            we in literature it solicitude. Design use say <a href="#">piqued
                                                                any</a> gay supply. Front sex match vexed her those
                                                            great.</p>

                                                        <button class="btn btn-primary">Send Application</button>

                                                    </form>

                                                </div>

                                            </div>


                                        </div>

                                    </div>

                                </div>

                                <div class="tab-style-01">

                                    <ul class="nav" role="tablist">
                                        <li role="presentation" class="active">
                                            <h4><a href="#relatedJob1" role="tab" data-toggle="tab">More jobs from
                                                    Expedia</a></h4>
                                        </li>
                                        <li role="presentation">
                                            <h4><a href="#relatedJob2" role="tab" data-toggle="tab">Similars to this
                                                    job</a></h4>
                                        </li>
                                    </ul>

                                    <div class="tab-content">
                                        <div role="tabpanel" class="tab-pane fade in active" id="relatedJob1">
                                            <div class="tab-content-inner">

                                                <div class="recent-job-wrapper mt-30">

                                                    <a href="#" class="recent-job-item highlight clearfix">
                                                        <div class="GridLex-grid-middle">
                                                            <div class="GridLex-col-6_sm-12_xs-12">
                                                                <div class="job-position">
                                                                    <div class="image">
                                                                        <img src="images/brands/06.png" alt="image" />
                                                                    </div>
                                                                    <div class="content">
                                                                        <h4>IT Web Developer</h4>
                                                                        <p>Expedia</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="GridLex-col-4_sm-8-xs-8_xss-12 mt-10-xss">
                                                                <div class="job-location">
                                                                    <i class="fa fa-map-marker text-primary"></i>
                                                                    Guildford, Surrey
                                                                </div>
                                                            </div>
                                                            <div class="GridLex-col-2_sm-4_xs-4_xss-12">
                                                                <div class="job-label label label-success">
                                                                    Freelance
                                                                </div>
                                                                <span class="font12 block spacing1 font400 text-center">1
                                                                    day ago</span>
                                                            </div>
                                                        </div>
                                                    </a>

                                                    <a href="#" class="recent-job-item clearfix">
                                                        <div class="GridLex-grid-middle">
                                                            <div class="GridLex-col-6_sm-12_xs-12">
                                                                <div class="job-position">
                                                                    <div class="image">
                                                                        <img src="images/brands/01.png" alt="image" />
                                                                    </div>
                                                                    <div class="content">
                                                                        <h4>IT Web Developer</h4>
                                                                        <p>Expedia</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="GridLex-col-4_sm-8-xs-8_xss-12 mt-10-xss">
                                                                <div class="job-location">
                                                                    <i class="fa fa-map-marker text-primary"></i>
                                                                    Guildford, Surrey
                                                                </div>
                                                            </div>
                                                            <div class="GridLex-col-2_sm-4_xs-4_xss-12">
                                                                <div class="job-label label label-danger">
                                                                    Part-time
                                                                </div>
                                                                <span class="font12 block spacing1 font400 text-center">2
                                                                    days ago</span>
                                                            </div>
                                                        </div>
                                                    </a>

                                                    <a href="#" class="recent-job-item clearfix">
                                                        <div class="GridLex-grid-middle">
                                                            <div class="GridLex-col-6_sm-12_xs-12">
                                                                <div class="job-position">
                                                                    <div class="image">
                                                                        <img src="images/brands/02.png" alt="image" />
                                                                    </div>
                                                                    <div class="content">
                                                                        <h4>IT Web Developer</h4>
                                                                        <p>Expedia</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="GridLex-col-4_sm-8-xs-8_xss-12 mt-10-xss">
                                                                <div class="job-location">
                                                                    <i class="fa fa-map-marker text-primary"></i>
                                                                    Guildford, Surrey
                                                                </div>
                                                            </div>
                                                            <div class="GridLex-col-2_sm-4_xs-4_xss-12">
                                                                <div class="job-label label label-success">
                                                                    Freelance
                                                                </div>
                                                                <span class="font12 block spacing1 font400 text-center">2
                                                                    days ago</span>
                                                            </div>
                                                        </div>
                                                    </a>

                                                    <a href="#" class="recent-job-item clearfix">
                                                        <div class="GridLex-grid-middle">
                                                            <div class="GridLex-col-6_sm-12_xs-12">
                                                                <div class="job-position">
                                                                    <div class="image">
                                                                        <img src="images/brands/04.png" alt="image" />
                                                                    </div>
                                                                    <div class="content">
                                                                        <h4>IT Web Developer</h4>
                                                                        <p>Expedia</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="GridLex-col-4_sm-8-xs-8_xss-12 mt-10-xss">
                                                                <div class="job-location">
                                                                    <i class="fa fa-map-marker text-primary"></i>
                                                                    Guildford, Surrey
                                                                </div>
                                                            </div>
                                                            <div class="GridLex-col-2_sm-4_xs-4_xss-12">
                                                                <div class="job-label label label-danger">
                                                                    Part-time
                                                                </div>
                                                                <span class="font12 block spacing1 font400 text-center">2
                                                                    days ago</span>
                                                            </div>
                                                        </div>
                                                    </a>

                                                    <a href="#" class="recent-job-item clearfix">
                                                        <div class="GridLex-grid-middle">
                                                            <div class="GridLex-col-6_sm-12_xs-12">
                                                                <div class="job-position">
                                                                    <div class="image">
                                                                        <img src="images/brands/05.png" alt="image" />
                                                                    </div>
                                                                    <div class="content">
                                                                        <h4>IT Web Developer</h4>
                                                                        <p>Expedia</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="GridLex-col-4_sm-8-xs-8_xss-12 mt-10-xss">
                                                                <div class="job-location">
                                                                    <i class="fa fa-map-marker text-primary"></i>
                                                                    Guildford, Surrey
                                                                </div>
                                                            </div>
                                                            <div class="GridLex-col-2_sm-4_xs-4_xss-12">
                                                                <div class="job-label label label-warning">
                                                                    Full-time
                                                                </div>
                                                                <span class="font12 block spacing1 font400 text-center">2
                                                                    days ago</span>
                                                            </div>
                                                        </div>
                                                    </a>

                                                </div>

                                            </div>
                                        </div>
                                        <div role="tabpanel" class="tab-pane fade" id="relatedJob2">
                                            <div class="tab-content-inner">

                                                <div class="recent-job-wrapper mt-30">

                                                    <a href="#" class="recent-job-item highlight clearfix">
                                                        <div class="GridLex-grid-middle">
                                                            <div class="GridLex-col-6_sm-12_xs-12">
                                                                <div class="job-position">
                                                                    <div class="image">
                                                                        <img src="images/brands/06.png" alt="image" />
                                                                    </div>
                                                                    <div class="content">
                                                                        <h4>IT Web Developer</h4>
                                                                        <p>Expedia</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="GridLex-col-4_sm-8-xs-8_xss-12 mt-10-xss">
                                                                <div class="job-location">
                                                                    <i class="fa fa-map-marker text-primary"></i>
                                                                    Guildford, Surrey
                                                                </div>
                                                            </div>
                                                            <div class="GridLex-col-2_sm-4_xs-4_xss-12">
                                                                <div class="job-label label label-success">
                                                                    Freelance
                                                                </div>
                                                                <span class="font12 block spacing1 font400 text-center">1
                                                                    day ago</span>
                                                            </div>
                                                        </div>
                                                    </a>

                                                    <a href="#" class="recent-job-item clearfix">
                                                        <div class="GridLex-grid-middle">
                                                            <div class="GridLex-col-6_sm-12_xs-12">
                                                                <div class="job-position">
                                                                    <div class="image">
                                                                        <img src="images/brands/01.png" alt="image" />
                                                                    </div>
                                                                    <div class="content">
                                                                        <h4>IT Web Developer</h4>
                                                                        <p>Expedia</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="GridLex-col-4_sm-8-xs-8_xss-12 mt-10-xss">
                                                                <div class="job-location">
                                                                    <i class="fa fa-map-marker text-primary"></i>
                                                                    Guildford, Surrey
                                                                </div>
                                                            </div>
                                                            <div class="GridLex-col-2_sm-4_xs-4_xss-12">
                                                                <div class="job-label label label-danger">
                                                                    Part-time
                                                                </div>
                                                                <span class="font12 block spacing1 font400 text-center">2
                                                                    days ago</span>
                                                            </div>
                                                        </div>
                                                    </a>

                                                    <a href="#" class="recent-job-item clearfix">
                                                        <div class="GridLex-grid-middle">
                                                            <div class="GridLex-col-6_sm-12_xs-12">
                                                                <div class="job-position">
                                                                    <div class="image">
                                                                        <img src="images/brands/02.png" alt="image" />
                                                                    </div>
                                                                    <div class="content">
                                                                        <h4>IT Web Developer</h4>
                                                                        <p>Expedia</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="GridLex-col-4_sm-8-xs-8_xss-12 mt-10-xss">
                                                                <div class="job-location">
                                                                    <i class="fa fa-map-marker text-primary"></i>
                                                                    Guildford, Surrey
                                                                </div>
                                                            </div>
                                                            <div class="GridLex-col-2_sm-4_xs-4_xss-12">
                                                                <div class="job-label label label-success">
                                                                    Freelance
                                                                </div>
                                                                <span class="font12 block spacing1 font400 text-center">2
                                                                    days ago</span>
                                                            </div>
                                                        </div>
                                                    </a>

                                                    <a href="#" class="recent-job-item clearfix">
                                                        <div class="GridLex-grid-middle">
                                                            <div class="GridLex-col-6_sm-12_xs-12">
                                                                <div class="job-position">
                                                                    <div class="image">
                                                                        <img src="images/brands/04.png" alt="image" />
                                                                    </div>
                                                                    <div class="content">
                                                                        <h4>IT Web Developer</h4>
                                                                        <p>Expedia</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="GridLex-col-4_sm-8-xs-8_xss-12 mt-10-xss">
                                                                <div class="job-location">
                                                                    <i class="fa fa-map-marker text-primary"></i>
                                                                    Guildford, Surrey
                                                                </div>
                                                            </div>
                                                            <div class="GridLex-col-2_sm-4_xs-4_xss-12">
                                                                <div class="job-label label label-danger">
                                                                    Part-time
                                                                </div>
                                                                <span class="font12 block spacing1 font400 text-center">2
                                                                    days ago</span>
                                                            </div>
                                                        </div>
                                                    </a>

                                                    <a href="#" class="recent-job-item clearfix">
                                                        <div class="GridLex-grid-middle">
                                                            <div class="GridLex-col-6_sm-12_xs-12">
                                                                <div class="job-position">
                                                                    <div class="image">
                                                                        <img src="images/brands/05.png" alt="image" />
                                                                    </div>
                                                                    <div class="content">
                                                                        <h4>IT Web Developer</h4>
                                                                        <p>Expedia</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="GridLex-col-4_sm-8-xs-8_xss-12 mt-10-xss">
                                                                <div class="job-location">
                                                                    <i class="fa fa-map-marker text-primary"></i>
                                                                    Guildford, Surrey
                                                                </div>
                                                            </div>
                                                            <div class="GridLex-col-2_sm-4_xs-4_xss-12">
                                                                <div class="job-label label label-warning">
                                                                    Full-time
                                                                </div>
                                                                <span class="font12 block spacing1 font400 text-center">2
                                                                    days ago</span>
                                                            </div>
                                                        </div>
                                                    </a>

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
        
        );
    }
}


export default Extract