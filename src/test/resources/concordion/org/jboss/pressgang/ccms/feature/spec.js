  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>zanata/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js at master · zanata/zanata</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="m31kggTt/7Eq27ExgPPRtb7kQmC1hn752z7OhJ4bgys=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-294d9d2efabc7938dd80a41a9c1299762eadceb7.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-efec9e1c49198032b9e454c52d6853c14695e07f.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-92d138f450f2960501e28397a2f63b0f100590f0.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-652d126fe16c0eae5a108ecc4fa6cc2bc8730de1.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="6867cc9e0a9ae06ec01e1b0109812042">

        <link data-pjax-transient rel='permalink' href='/zanata/zanata/blob/5f96797e6b1986ea44ecde8f1f56d9296450bfce/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js'>
    <meta property="og:title" content="zanata"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/zanata/zanata"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/0a06368d154f4db91cae77f7aedb4dfa?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="zanata - Zanata is a web-based system for translators to translate documentation and software online using a web-browser."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="zanata/zanata"/>

    <meta name="description" content="zanata - Zanata is a web-based system for translators to translate documentation and software online using a web-browser." />

  <link href="https://github.com/zanata/zanata/commits/master.atom" rel="alternate" title="Recent Commits to zanata:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob linux vis-public env-production  ">
    <div id="wrapper">

      

      
      
      

      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-icon mega-icon-invertocat"></span>
</a>

    <div class="divider-vertical"></div>

      <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" data-username="codemiller" autocapitalize="off">

    <input type="hidden" name="nwo" value="zanata/zanata" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item selected">
            <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
            <input type="radio" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item">
            <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="mini-icon help tooltipped downwards" title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

    <input type="hidden" name="type" value="Code" />

  <input type="hidden" name="ref" value="cmdform">

  <div class="divider-vertical"></div>

    <input type="hidden" class="js-repository-name-with-owner" value="zanata/zanata"/>
    <input type="hidden" class="js-repository-branch" value="master"/>
    <input type="hidden" class="js-repository-tree-sha" value="81c0f2912e53bea2e505211140e48ef8e7c9b640"/>
</form>
        <ul class="top-nav">
            <li class="explore"><a href="https://github.com/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="http://help.github.com">Help</a></li>
        </ul>
      </div>

    

  

    <ul id="user-links">
      <li>
        <a href="https://github.com/codemiller" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/f6b374263e2f1f57befe1779d8888d8a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> codemiller
        </a>
      </li>

        <li>
          <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
            <span class="mini-icon mini-icon-create"></span>
          </a>
        </li>

        <li>
          <a href="/settings/profile" id="account_settings"
            class="tooltipped downwards"
            title="Account settings ">
            <span class="mini-icon mini-icon-account-settings"></span>
          </a>
        </li>
        <li>
          <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out">
            <span class="mini-icon mini-icon-logout"></span>
          </a>
        </li>

    </ul>


<div class="js-new-dropdown-contents hidden">
  <ul class="dropdown-menu">
    <li>
      <a href="/new"><span class="mini-icon mini-icon-create"></span> New repository</a>
    </li>
    <li>
        <a href="https://github.com/zanata/zanata/issues/new"><span class="mini-icon mini-icon-issue-opened"></span> New issue</a>
    </li>
    <li>
    </li>
    <li>
      <a href="/organizations/new"><span class="mini-icon mini-icon-u-list"></span> New organization</a>
    </li>
  </ul>
</div>


    
  </div>
</div>

      

      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              

<ul class="pagehead-actions">


    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="m31kggTt/7Eq27ExgPPRtb7kQmC1hn752z7OhJ4bgys=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="1461609" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">
          <span class="mini-icon mini-icon-watching"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder js-menu-content">
        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-watching"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container ">
      <a href="/zanata/zanata/unstar" class="minibutton js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-remove-star"></span>
        <span class="text">Unstar</span>
      </a>
      <a href="/zanata/zanata/star" class="minibutton js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>
        <span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/zanata/zanata/stargazers">22</a>
    </li>

        <li>
          <a href="/zanata/zanata/fork" class="minibutton js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="facebox nofollow">
            <span class="mini-icon mini-icon-branch-create"></span>
            <span class="text">Fork</span>
          </a>
          <a href="/zanata/zanata/network" class="social-count">11</a>
        </li>


</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/zanata" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">zanata</span>
                  </a></span> /
                <strong><a href="/zanata/zanata" class="js-current-repository">zanata</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li class="pulse-nav"><a href="/zanata/zanata/pulse" class="js-selected-navigation-item " data-selected-links="pulse /zanata/zanata/pulse" rel="nofollow"><span class="mini-icon mini-icon-pulse"></span></a></li>
    <li><a href="/zanata/zanata" class="js-selected-navigation-item selected" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /zanata/zanata">Code</a></li>
    <li><a href="/zanata/zanata/network" class="js-selected-navigation-item " data-selected-links="repo_network /zanata/zanata/network">Network</a></li>
    <li><a href="/zanata/zanata/pulls" class="js-selected-navigation-item " data-selected-links="repo_pulls /zanata/zanata/pulls">Pull Requests <span class='counter'>0</span></a></li>


      <li><a href="/zanata/zanata/wiki" class="js-selected-navigation-item " data-selected-links="repo_wiki /zanata/zanata/wiki">Wiki</a></li>


    <li><a href="/zanata/zanata/graphs" class="js-selected-navigation-item " data-selected-links="repo_graphs repo_contributors /zanata/zanata/graphs">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/zanata/zanata/tags" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_tags /zanata/zanata/tags">Tags <span class="counter ">58</span></a></li>
    </ul>
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/1.4/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.4" rel="nofollow" title="1.4">1.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/1.5/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.5" rel="nofollow" title="1.5">1.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/1.6/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.6" rel="nofollow" title="1.6">1.6</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/1.7/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.7" rel="nofollow" title="1.7">1.7</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/arquillian/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="arquillian" rel="nofollow" title="arquillian">arquillian</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/hql-text-flow-search/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="hql-text-flow-search" rel="nofollow" title="hql-text-flow-search">hql-text-flow-search</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/integration/1.5/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="integration/1.5" rel="nofollow" title="integration/1.5">integration/1.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/integration/master/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="integration/master" rel="nofollow" title="integration/master">integration/master</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/legacy/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="legacy" rel="nofollow" title="legacy">legacy</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item selected">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/master/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/merged-contents/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="merged-contents" rel="nofollow" title="merged-contents">merged-contents</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/okapi-filters/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="okapi-filters" rel="nofollow" title="okapi-filters">okapi-filters</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/po-upload/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="po-upload" rel="nofollow" title="po-upload">po-upload</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/release/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="release" rel="nofollow" title="release">release</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/rhbz786630/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="rhbz786630" rel="nofollow" title="rhbz786630">rhbz786630</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/rhbz841381/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="rhbz841381" rel="nofollow" title="rhbz841381">rhbz841381</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/rhbz856015/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="rhbz856015" rel="nofollow" title="rhbz856015">rhbz856015</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/rhbz872039/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="rhbz872039" rel="nofollow" title="rhbz872039">rhbz872039</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/rhbz881962/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="rhbz881962" rel="nofollow" title="rhbz881962">rhbz881962</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/rhbz886711/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="rhbz886711" rel="nofollow" title="rhbz886711">rhbz886711</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/rhbz887052/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="rhbz887052" rel="nofollow" title="rhbz887052">rhbz887052</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/rhbz888150/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="rhbz888150" rel="nofollow" title="rhbz888150">rhbz888150</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/rhbz910964/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="rhbz910964" rel="nofollow" title="rhbz910964">rhbz910964</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/seam23/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="seam23" rel="nofollow" title="seam23">seam23</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/seam230final/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="seam230final" rel="nofollow" title="seam230final">seam230final</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/string-i18n/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="string-i18n" rel="nofollow" title="string-i18n">string-i18n</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/test-scope-profile/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="test-scope-profile" rel="nofollow" title="test-scope-profile">test-scope-profile</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/tm-query-caching/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="tm-query-caching" rel="nofollow" title="tm-query-caching">tm-query-caching</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/zanata-1.5.0-alpha-2/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="zanata-1.5.0-alpha-2" rel="nofollow" title="zanata-1.5.0-alpha-2">zanata-1.5.0-alpha-2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/zanata-1.5.0-alpha-1/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="zanata-1.5.0-alpha-1" rel="nofollow" title="zanata-1.5.0-alpha-1">zanata-1.5.0-alpha-1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/zanata-1.5.0/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="zanata-1.5.0" rel="nofollow" title="zanata-1.5.0">zanata-1.5.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/zanata-1.4-alpha-1/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="zanata-1.4-alpha-1" rel="nofollow" title="zanata-1.4-alpha-1">zanata-1.4-alpha-1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/zanata-1.4.5-alpha-1/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="zanata-1.4.5-alpha-1" rel="nofollow" title="zanata-1.4.5-alpha-1">zanata-1.4.5-alpha-1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/zanata-1.4.5.2/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="zanata-1.4.5.2" rel="nofollow" title="zanata-1.4.5.2">zanata-1.4.5.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/zanata-1.4.5.1/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="zanata-1.4.5.1" rel="nofollow" title="zanata-1.4.5.1">zanata-1.4.5.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/zanata-1.4.5/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="zanata-1.4.5" rel="nofollow" title="zanata-1.4.5">zanata-1.4.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/zanata-1.4.4/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="zanata-1.4.4" rel="nofollow" title="zanata-1.4.4">zanata-1.4.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/zanata-1.4.3-beta-1/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="zanata-1.4.3-beta-1" rel="nofollow" title="zanata-1.4.3-beta-1">zanata-1.4.3-beta-1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/zanata-1.4.3-alpha-2/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="zanata-1.4.3-alpha-2" rel="nofollow" title="zanata-1.4.3-alpha-2">zanata-1.4.3-alpha-2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/zanata-1.4.3-alpha-1/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="zanata-1.4.3-alpha-1" rel="nofollow" title="zanata-1.4.3-alpha-1">zanata-1.4.3-alpha-1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/zanata-1.4.3/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="zanata-1.4.3" rel="nofollow" title="zanata-1.4.3">zanata-1.4.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/zanata-1.4.2/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="zanata-1.4.2" rel="nofollow" title="zanata-1.4.2">zanata-1.4.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/zanata-1.4.1/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="zanata-1.4.1" rel="nofollow" title="zanata-1.4.1">zanata-1.4.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/zanata-1.4/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="zanata-1.4" rel="nofollow" title="zanata-1.4">zanata-1.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/zanata-1.3-alpha-3/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="zanata-1.3-alpha-3" rel="nofollow" title="zanata-1.3-alpha-3">zanata-1.3-alpha-3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/zanata-1.3-alpha-2/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="zanata-1.3-alpha-2" rel="nofollow" title="zanata-1.3-alpha-2">zanata-1.3-alpha-2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/zanata-1.3-alpha-1/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="zanata-1.3-alpha-1" rel="nofollow" title="zanata-1.3-alpha-1">zanata-1.3-alpha-1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/zanata-1.3/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="zanata-1.3" rel="nofollow" title="zanata-1.3">zanata-1.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-2.3.1/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-2.3.1" rel="nofollow" title="server-2.3.1">server-2.3.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-2.3.0/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-2.3.0" rel="nofollow" title="server-2.3.0">server-2.3.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-2.2.2/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-2.2.2" rel="nofollow" title="server-2.2.2">server-2.2.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-2.2.1/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-2.2.1" rel="nofollow" title="server-2.2.1">server-2.2.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-2.2.0/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-2.2.0" rel="nofollow" title="server-2.2.0">server-2.2.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-2.1.4/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-2.1.4" rel="nofollow" title="server-2.1.4">server-2.1.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-2.1.3/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-2.1.3" rel="nofollow" title="server-2.1.3">server-2.1.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-2.1.2/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-2.1.2" rel="nofollow" title="server-2.1.2">server-2.1.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-2.1.1/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-2.1.1" rel="nofollow" title="server-2.1.1">server-2.1.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-2.1.0/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-2.1.0" rel="nofollow" title="server-2.1.0">server-2.1.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-2.0.4/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-2.0.4" rel="nofollow" title="server-2.0.4">server-2.0.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-2.0.3/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-2.0.3" rel="nofollow" title="server-2.0.3">server-2.0.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-2.0.2/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-2.0.2" rel="nofollow" title="server-2.0.2">server-2.0.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-2.0.1/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-2.0.1" rel="nofollow" title="server-2.0.1">server-2.0.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-2.0.0/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-2.0.0" rel="nofollow" title="server-2.0.0">server-2.0.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-1.7.3/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-1.7.3" rel="nofollow" title="server-1.7.3">server-1.7.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-1.7.2/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-1.7.2" rel="nofollow" title="server-1.7.2">server-1.7.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-1.7.1/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-1.7.1" rel="nofollow" title="server-1.7.1">server-1.7.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-1.7.0-alpha-1/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-1.7.0-alpha-1" rel="nofollow" title="server-1.7.0-alpha-1">server-1.7.0-alpha-1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-1.7.0/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-1.7.0" rel="nofollow" title="server-1.7.0">server-1.7.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-1.6.1-alpha-1/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-1.6.1-alpha-1" rel="nofollow" title="server-1.6.1-alpha-1">server-1.6.1-alpha-1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-1.6.1/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-1.6.1" rel="nofollow" title="server-1.6.1">server-1.6.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-1.6.0-beta-1/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-1.6.0-beta-1" rel="nofollow" title="server-1.6.0-beta-1">server-1.6.0-beta-1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-1.6.0-alpha-2/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-1.6.0-alpha-2" rel="nofollow" title="server-1.6.0-alpha-2">server-1.6.0-alpha-2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-1.6.0-alpha-1/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-1.6.0-alpha-1" rel="nofollow" title="server-1.6.0-alpha-1">server-1.6.0-alpha-1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/server-1.6.0/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="server-1.6.0" rel="nofollow" title="server-1.6.0">server-1.6.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/flies-1.2-alpha-3/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="flies-1.2-alpha-3" rel="nofollow" title="flies-1.2-alpha-3">flies-1.2-alpha-3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/flies-1.2-alpha-2/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="flies-1.2-alpha-2" rel="nofollow" title="flies-1.2-alpha-2">flies-1.2-alpha-2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/flies-1.2-alpha-1/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="flies-1.2-alpha-1" rel="nofollow" title="flies-1.2-alpha-1">flies-1.2-alpha-1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/flies-1.2/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="flies-1.2" rel="nofollow" title="flies-1.2">flies-1.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/flies-1.1-alpha-1/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="flies-1.1-alpha-1" rel="nofollow" title="flies-1.1-alpha-1">flies-1.1-alpha-1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/flies-1.1.1/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="flies-1.1.1" rel="nofollow" title="flies-1.1.1">flies-1.1.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/flies-1.1/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="flies-1.1" rel="nofollow" title="flies-1.1">flies-1.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/flies-1.0-alpha-1/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="flies-1.0-alpha-1" rel="nofollow" title="flies-1.0-alpha-1">flies-1.0-alpha-1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/flies-1.0.3/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="flies-1.0.3" rel="nofollow" title="flies-1.0.3">flies-1.0.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/flies-1.0.2/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="flies-1.0.2" rel="nofollow" title="flies-1.0.2">flies-1.0.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/flies-1.0.1/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="flies-1.0.1" rel="nofollow" title="flies-1.0.1">flies-1.0.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zanata/zanata/blob/flies-1.0/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="flies-1.0" rel="nofollow" title="flies-1.0">flies-1.0</a>
                </div> <!-- /.select-menu-item -->
            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/zanata/zanata" class="selected js-selected-navigation-item tabnav-tab" data-selected-links="repo_source /zanata/zanata">Files</a></li>
    <li><a href="/zanata/zanata/commits/master" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_commits /zanata/zanata/commits/master">Commits</a></li>
    <li><a href="/zanata/zanata/branches" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_branches /zanata/zanata/branches" rel="nofollow">Branches <span class="counter ">28</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:c4e084e912cfe0e88e88d26c5369de45 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:c4e084e912cfe0e88e88d26c5369de45 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/zanata/zanata" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">zanata</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/zanata/zanata/tree/master/functional-test" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">functional-test</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/zanata/zanata/tree/master/functional-test/src" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/zanata/zanata/tree/master/functional-test/src/test" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">test</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/zanata/zanata/tree/master/functional-test/src/test/resources" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">resources</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/zanata/zanata/tree/master/functional-test/src/test/resources/concordion" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">concordion</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/zanata/zanata/tree/master/functional-test/src/test/resources/concordion/org" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">org</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/zanata/zanata/tree/master/functional-test/src/test/resources/concordion/org/zanata" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">zanata</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/zanata/zanata/tree/master/functional-test/src/test/resources/concordion/org/zanata/feature" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">feature</span></a></span><span class="separator"> / </span><strong class="final-path">spec.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/zanata/zanata/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/15d66320e6e6466cc25e2db86268f5de?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/huangp" rel="author">huangp</a></span>
    <time class="js-relative-date" datetime="2013-01-15T15:57:45-08:00" title="2013-01-15 15:57:45">January 15, 2013</time>
    <div class="commit-title">
        <a href="/zanata/zanata/commit/3385c348b64e16f6c385388e1d38e33596fc2f8b" class="message">rewrite test</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/15d66320e6e6466cc25e2db86268f5de?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/huangp">huangp</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/zanata/zanata/blob/5f96797e6b1986ea44ecde8f1f56d9296450bfce/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" data-title="zanata/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js at master · zanata/zanata · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>14 lines (14 sloc)</span>
                <span>0.398 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                        <a class="minibutton tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/zanata/zanata/edit/master/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js"
                           data-method="post" rel="nofollow">Edit</a>
                  <a href="/zanata/zanata/raw/master/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/zanata/zanata/blame/master/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="button minibutton ">Blame</a>
                  <a href="/zanata/zanata/commits/master/functional-test/src/test/resources/concordion/org/zanata/feature/spec.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">ready</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC2'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;span&#39;</span><span class="p">).</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC3'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;c:execute&#39;</span><span class="p">);</span></div><div class='line' id='LC4'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC5'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s2">&quot;concordion-execute&quot;</span><span class="p">);</span></div><div class='line' id='LC6'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC7'><span class="p">});</span></div><div class='line' id='LC8'><span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">ready</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC9'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;span&#39;</span><span class="p">).</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC10'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;c:set&#39;</span><span class="p">);</span></div><div class='line' id='LC11'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s2">&quot;concordion-data&quot;</span><span class="p">);</span></div><div class='line' id='LC13'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC14'><span class="p">});</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1360648843" height="64" width="64">
</div>


        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.22914s from fe3.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/zanata/zanata/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.22967' data-host='fe3'></span>
    
  </body>
</html>

