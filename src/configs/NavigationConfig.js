import { 
  DashboardOutlined, 
  AppstoreOutlined,
  FileTextOutlined,
  SafetyOutlined,
  StopOutlined,
  DotChartOutlined,
  PlusCircleOutlined,
  SoundOutlined,
  DollarCircleOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from 'configs/AppConfig'

const extraNavTree = [
  {
    key: 'extra',
    path: `${APP_PREFIX_PATH}/pages`,
    title: 'sidenav.pages',
    icon: PlusCircleOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: 'extra-pages',
        path: `${APP_PREFIX_PATH}/pages`,
        title: 'sidenav.pages',
        icon: FileTextOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'extra-pages-profile',
            path: `${APP_PREFIX_PATH}/pages/profile`,
            title: 'sidenav.pages.profile',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'extra-pages-list',
            path: `${APP_PREFIX_PATH}/pages/user-list`,
            title: 'sidenav.pages.userlist',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'extra-pages-invoice',
            path: `${APP_PREFIX_PATH}/pages/invoice`,
            title: 'sidenav.pages.invoice',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'extra-pages-pricing',
            path: `${APP_PREFIX_PATH}/pages/pricing`,
            title: 'sidenav.pages.pricing',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'extra-pages-faq',
            path: `${APP_PREFIX_PATH}/pages/faq`,
            title: 'sidenav.pages.faq',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'extra-pages-setting',
            path: `${APP_PREFIX_PATH}/pages/setting`,
            title: 'sidenav.pages.setting',
            icon: '',
            breadcrumb: true,
            submenu: []
          }
        ]
      },
      {
        key: 'extra-auth',
        path: `${AUTH_PREFIX_PATH}`,
        title: 'sidenav.authentication',
        icon: SafetyOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'extra-auth-login-1',
            path: `${AUTH_PREFIX_PATH}/login-1`,
            title: 'sidenav.authentication.login.1',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'extra-auth-login-2',
            path: `${AUTH_PREFIX_PATH}/login-2`,
            title: 'sidenav.authentication.login.2',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'extra-auth-register-1',
            path: `${AUTH_PREFIX_PATH}/register-1`,
            title: 'sidenav.authentication.register.1',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'extra-auth-register-2',
            path: `${AUTH_PREFIX_PATH}/register-2`,
            title: 'sidenav.authentication.register.2',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'extra-auth-forgot-password',
            path: `${AUTH_PREFIX_PATH}/forgot-password`,
            title: 'sidenav.authentication.forgetPassword',
            icon: '',
            breadcrumb: true,
            submenu: []
          }
        ]
      },
      {
        key: 'extra-errors',
        path: `${AUTH_PREFIX_PATH}/error-1`,
        title: 'sidenav.errors',
        icon: StopOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'extra-errors-error-1',
            path: `${AUTH_PREFIX_PATH}/error-1`,
            title: 'sidenav.errors.error.1',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'extra-errors-error-2',
            path: `${AUTH_PREFIX_PATH}/error-2`,
            title: 'sidenav.errors.error.2',
            icon: '',
            breadcrumb: true,
            submenu: []
          }
        ]
      }
    ]
  }
]

const dashBoardNavTree = [{
  key: 'new',
  path: `${APP_PREFIX_PATH}`,
  title: 'sidenav.new',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'new-overview',
      path: `${APP_PREFIX_PATH}/new/overview`,
      title: 'sidenav.new.overview',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'new-analytic',
      path: `${APP_PREFIX_PATH}/new/demo/analytic`,
      title: 'sidenav.new.analytic',
      icon: DotChartOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const appsNavTree = [{
  key: 'catalogue',
  path: `${APP_PREFIX_PATH}/distribution`,
  title: 'sidenav.distribution',
  icon: AppstoreOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'catalogue-music',
      path: `${APP_PREFIX_PATH}/distribution/release`,
      title: 'sidenav.distribution.music',
      icon: SoundOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'catalogue-music-manage-music',
          path: `${APP_PREFIX_PATH}/distribution/music/manage-music`,
          title: 'sidenav.distribution.music.manage-music',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'catalogue-music-upload-music',
          path: `${APP_PREFIX_PATH}/distribution/music/upload-music`,
          title: 'sidenav.distribution.music.upload-music',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    }
  ]
}]

const royaltyNav = [{
  key: 'royalty',
  path: `${APP_PREFIX_PATH}`,
  title: 'sidenav.royalty',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'royalty-earning',
      path: `${APP_PREFIX_PATH}/new/overview`,
      title: 'sidenav.royalty.accounting',
      icon: DollarCircleOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'royalty-reports',
      path: `${APP_PREFIX_PATH}/new/overview`,
      title: 'sidenav.royalty.reports',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]


const navigationConfig = [
  ...dashBoardNavTree,
  ...appsNavTree,
  ...royaltyNav,
  ...extraNavTree,
]

export default navigationConfig;
