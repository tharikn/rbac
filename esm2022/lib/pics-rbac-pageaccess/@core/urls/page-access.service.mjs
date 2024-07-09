import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccessManagementConfig } from '../../@core/urls/access-management-url.config';
import { DataBaseConfig } from './rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "../service/data-store.service";
export class PageAccessService {
    _storeservice;
    isfull = false;
    ishide = false;
    isread = false;
    isreadwrite = false;
    // constructor(private httpService: HttpService) {
    //    // This is intentional
    // }
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    /**
     * when user selected policy
     * @param access Raw valur of RBac form
     * @returns form array of DA
     * @childFunction of saveRbac
     */
    accessByPolicy(access, id, policyGroupData, selectedFieldData, pageData) {
        const fullArray = [];
        for (const value of id) {
            const selectedData = policyGroupData.filter(key => key.id === value);
            const formObj = {
                id: '',
                description: '',
                policygroupname: '',
                pageConfigs: [],
                assetConfigs: []
            };
            this.setPolicyObj(formObj, selectedData, value);
            this.loadAccessForPage(access, selectedData, formObj, value, pageData);
            if (access.fieldLevelData.length) {
                this.loadAccessForFields(access, selectedData, formObj, value, selectedFieldData, pageData);
            }
            fullArray.push(formObj);
        }
        return fullArray;
    }
    /**
     * when user selected Persona
     * @param access Raw valur of RBac form
     * @returns form array of DA
     * @childFunction of saveRbac
     */
    accessByPersona(access, personaId, id, roleAddedData, selectedFieldData, pageData) {
        const fullArray = [];
        // const personaId = this.rbacForm.get('roleid').value;
        // const personaId = this.rbacForm.get('roleid').value;
        const formObj = {
            id: '',
            rolekey: '',
            rolename: '',
            description: '',
            effectivedate: '',
            pageConfigs: [],
            assetConfigs: [],
            rolePolicyGroupConfigs: []
        };
        for (const item of personaId) {
            const selectedData = roleAddedData.filter(key => key.id === item);
            this.setRoleObj(formObj, selectedData, item, id);
            this.loadAccessForPage(access, selectedData, formObj, item, pageData);
            if (access.fieldLevelData.length) {
                this.loadAccessForFields(access, selectedData, formObj, item, selectedFieldData, pageData);
            }
            fullArray.push(formObj);
        }
        return fullArray;
    }
    /**
     * when user selected User
     * @param access Raw valur of RBac form
     * @returns form array of DA
     * @childFunction of saveRbac
     */
    accessByUser(access, userId, id, roleids, userList, selectedFieldData, pageData) {
        const fullArray = [];
        for (const item of userId) {
            const selectedData = userList.filter(key => key.id === item);
            const formObj = { ...selectedData[0] };
            formObj.pageConfigs = [];
            formObj.assetConfigs = [];
            formObj.policyGroupConfigs = [];
            formObj.roleConfigs = [];
            console.log('======');
            this.setUserObj(formObj, selectedData, item, id, roleids);
            console.log('======1');
            this.loadAccessForPage(access, selectedData, formObj, item, pageData);
            console.log('======2');
            if (access.fieldLevelData.length) {
                this.loadAccessForFields(access, selectedData, formObj, item, selectedFieldData, pageData);
            }
            fullArray.push(formObj);
        }
        return fullArray;
    }
    /**
     * Fetch access list for dashboard access
     * @param access
     * @param assetDashBoardConfigs
     * @param formObj
     * @param id
     */
    loadAccessForPage(access, selectedData, formObj, id, pageData) {
        const existPageConfigs = selectedData[0]['pageConfigs'];
        for (const item of access.pageLevelData) {
            const selectedModule = pageData.filter(key => key.id === item['pageid']);
            const pageAccess = access.pageLevelData.filter(key => key.pageid === item['pageid']);
            this.pageAccessCheck(pageAccess);
            const pageKey = {
                id: null,
                isactive: true,
                isfull: this.isfull,
                ishide: this.ishide,
                isread: this.isread,
                isreadwrite: this.isreadwrite,
                pageid: item['pageid'],
                policygroupid: id,
                modulekey: selectedModule[0]['modulekey'],
                submodulekey: selectedModule[0]['submodulekey']
            };
            // check exist page length
            if (existPageConfigs.length) {
                const existIds = existPageConfigs.map(p => p.pageid);
                const chkPage = existIds.includes(item['pageid']);
                if (chkPage) {
                    const index = existIds.indexOf(item['pageid']);
                    if (index > -1) {
                        //if found
                        pageKey.id = existPageConfigs[index]['id'];
                        pageKey.isactive = false;
                        formObj.pageConfigs.push(pageKey);
                        existPageConfigs.splice(index, 1);
                    }
                }
                const d = { ...pageKey };
                d.id = null;
                d.isactive = true;
                formObj.pageConfigs.push(d);
            }
            else {
                formObj.pageConfigs.push(pageKey);
            }
        }
        // still existconfig length
        if (existPageConfigs.length) {
            existPageConfigs.map(t => {
                t.isactive = false;
                formObj.pageConfigs.push(t);
                return t;
            });
        }
    }
    pageAccessCheck(pageAccess) {
        if (pageAccess[0].pageAccess === '1') {
            this.isfull = true;
        }
        else if (pageAccess[0].pageAccess === '4') {
            this.ishide = true;
        }
        else if (pageAccess[0].pageAccess === '3') {
            this.isread = true;
        }
        else if (pageAccess[0].pageAccess === '2') {
            this.isreadwrite = true;
        }
    }
    setPolicyObj(formObj, selectedData, id) {
        formObj.id = id;
        formObj.description = selectedData[0]['description'];
        formObj.policygroupname = selectedData[0]['policygroupname'];
    }
    loadAccessForFields(access, selectedData, formObj, id, selectedFieldData, pageData) {
        // console.log(selectedData)
        const assetConfigs = selectedData[0]['assetConfigs'].filter(key => key.modulekey !== null);
        // console.log('------------')
        const selectedModule = pageData.filter(key => key.id === access.fpages[0]['id']);
        // console.log(access.fieldLevelData)
        selectedFieldData =
            access.fieldLevelData !== null ? this.setSelectedFieldPage(access.fieldLevelData, selectedFieldData) : [];
        // console.log(selectedData, assetConfigs)
        for (const selectedField of selectedFieldData) {
            if (selectedField.access === null) {
                // continue;
            }
            console.log(selectedField);
            let isfull = false;
            let ishide = false;
            let isread = false;
            let isreadwrite = false;
            if (selectedField.access === '2' || selectedField.access === '1') {
                isfull = true;
            }
            else if (selectedField.access === '4') {
                ishide = true;
            }
            else if (selectedField.access === '3') {
                isread = true;
            }
            else if (selectedField.access === '2') {
                isreadwrite = true;
            }
            const aConfigs = {
                id: selectedField['id'] ? selectedField['id'] : null,
                isactive: true,
                isfull: isfull,
                ishide: ishide,
                isread: isread,
                isreadwrite: isreadwrite,
                assetid: selectedField['assetid'],
                policygroupid: id,
                pageid: selectedField['pageId'] ? selectedField['pageId'] : access.fpages[0]['id'],
                modulekey: selectedModule[0]['modulekey'],
                submodulekey: selectedModule[0]['submodulekey']
            };
            // check exist page length
            this.checkExistAsset(assetConfigs, selectedField, aConfigs, formObj);
        }
    }
    checkExistAsset(assetConfigs, selectedField, aConfigs, formObj) {
        if (assetConfigs.length) {
            const existIds = assetConfigs.map(p => p.assetid);
            const chkPage = existIds.includes(selectedField['assetid']);
            if (chkPage) {
                const index = existIds.indexOf(selectedField['assetid']);
                if (index > -1) {
                    //if found
                    aConfigs.id = assetConfigs[index]['id'];
                    aConfigs.isactive = false;
                    formObj.assetConfigs.push(aConfigs);
                    assetConfigs.splice(index, 1);
                }
            }
            const d = { ...aConfigs };
            d.isactive = true;
            d.id = null;
            formObj.assetConfigs.push(d);
        }
        else {
            formObj.assetConfigs.push(aConfigs);
        }
    }
    setRoleObj(formObj, selectedData, roleid, policyid) {
        formObj.id = roleid;
        formObj.rolekey = selectedData[0]['rolekey'];
        formObj.rolename = selectedData[0]['rolename'];
        formObj.effectivedate = selectedData[0]['effectivedate'];
        formObj.description = selectedData[0]['description'];
        // loop the policy group
        const id = policyid;
        const existRolePolicyConfig = selectedData[0]['rolePolicyGroupConfigs'];
        for (const item of id) {
            const rpolicyConfig = {
                id: null,
                isactive: true,
                policygroupid: item,
                roleid: roleid // role id
            };
            // check exist page length
            if (existRolePolicyConfig.length) {
                const existIds = existRolePolicyConfig.map(p => p.policygroupid);
                const chkPage = existIds.includes(item);
                if (chkPage) {
                    const index = existIds.indexOf(item);
                    if (index > -1) {
                        //if found
                        rpolicyConfig.id = existRolePolicyConfig[index]['id'];
                        existRolePolicyConfig.splice(index, 1);
                    }
                }
            }
            formObj.rolePolicyGroupConfigs.push(rpolicyConfig);
        }
        // still existconfig length
        if (existRolePolicyConfig.length) {
            existRolePolicyConfig.map(t => {
                t.isactive = false;
                formObj.rolePolicyGroupConfigs.push(t);
                return t;
            });
        }
    }
    setUserObj(formObj, selectedData, userId, id, roleids) {
        // loop the policy group
        const existRolePolicyConfig = selectedData[0]['policyGroupConfigs'];
        this.getCheckPolicyConfig(id, userId, existRolePolicyConfig, formObj);
        // still existconfig length
        if (existRolePolicyConfig.length) {
            existRolePolicyConfig.map(t => {
                t.isactive = false;
                formObj.policyGroupConfigs.push(t);
                return t;
            });
        }
        // loop the role group
        // const roleids = this.rbacForm.get('roleid').value;
        const existRoleId = selectedData[0]['roleConfigs'];
        for (const role of existRoleId) {
            const chkRoleData = roleids.includes(role['roleid']);
            const roleGrp = {
                id: role['id'],
                isactive: false,
                isdefaultrole: role['isdefaultrole'],
                userid: userId,
                roleid: role['roleid'],
                effectivedate: role['effectivedate']
            };
            if (chkRoleData) {
                const index1 = roleids.indexOf(role['roleid']);
                if (index1 > -1) {
                    //if found
                    roleids.splice(index1, 1);
                }
                roleGrp.isactive = true;
            }
            formObj.roleConfigs.push(roleGrp);
        }
        // check new roles group ids
        if (roleids.length) {
            for (const roleId of roleids) {
                const roleGrp = {
                    id: null,
                    isactive: true,
                    isdefaultrole: false,
                    userid: userId,
                    roleid: roleId,
                    effectivedate: new Date()
                };
                formObj.roleConfigs.push(roleGrp);
            }
        }
    }
    getCheckPolicyConfig(id, userId, existRolePolicyConfig, formObj) {
        for (const item of id) {
            const rpolicyConfig = {
                id: null,
                isactive: true,
                policygroupid: item,
                userid: userId // user id
            };
            // check exist page length
            if (existRolePolicyConfig.length) {
                const existIds = existRolePolicyConfig.map(p => p.policygroupid);
                const chkPage = existIds.includes(item);
                if (chkPage) {
                    const index = existIds.indexOf(item);
                    if (index > -1) {
                        //if found
                        rpolicyConfig.id = existRolePolicyConfig[index]['id'];
                        existRolePolicyConfig.splice(index, 1);
                    }
                }
            }
            formObj.policyGroupConfigs.push(rpolicyConfig);
        }
    }
    setSelectedFieldPage(updateArray, selectedFieldData) {
        // console.log('=========>', updateArray, selectedFieldData)
        if (updateArray?.length) {
            if (selectedFieldData?.length >= updateArray.length) {
                selectedFieldData = this.updateDuplicatesinArray([...selectedFieldData], [...updateArray]);
                return selectedFieldData;
            }
            else {
                selectedFieldData = [...updateArray];
                return selectedFieldData;
            }
        }
    }
    updateDuplicatesinArray(origArr, updatingArr) {
        const updatingArrids = new Set(updatingArr.map(ele => ele.assetid));
        return [...updatingArr, ...origArr.filter(ele => !updatingArrids.has(ele.assetid))];
    }
    getMostFrequentEle(arr) {
        const hashMap = arr.reduce((acc, val) => {
            acc[String(val)] = (acc[val] || 0) + 1;
            return acc;
        }, {});
        return Object.keys(hashMap).reduce((a, b) => (hashMap[a] > hashMap[b] ? a : b));
    }
    getAccessArrayOnClick(pagesFromField, pageData, selectedFieldData, savedPageAccessPatching, existingValue) {
        const accessArray = [];
        for (let i = 0; i < pagesFromField?.length; i++) {
            const pageName = pageData.filter(key => key.id === pagesFromField[i]);
            const fieldLevelExist = selectedFieldData.filter(ele => ele.pageId == pagesFromField[i]);
            const pageAccessValue = this.checkFieldLevelExist(fieldLevelExist, savedPageAccessPatching, pagesFromField, existingValue, i);
            if (!existingValue[i]) {
                const activeVersion = pageName[0]?.activeVersion;
                let tableSchemaConfig = activeVersion?.tableschemaconfig;
                tableSchemaConfig = JSON.parse(tableSchemaConfig);
                const objectType = tableSchemaConfig?.objectType ? tableSchemaConfig.objectType : 'table';
                if (objectType === 'view') {
                    accessArray.push(new FormGroup({
                        pageName: new FormControl(pageName[0]?.pagename),
                        pageid: new FormControl(pagesFromField[i]),
                        pageAccess: new FormControl('3'),
                        validity: new FormControl((existingValue[i]?.validity && String(existingValue[i].validity)) || '0'),
                        condition: new FormControl((existingValue[i]?.condition && existingValue[i].condition) || 'always'),
                        fallbackTo: new FormControl((existingValue[i]?.condition && existingValue[i].fallbackTo) || 'n')
                    }));
                }
                else {
                    accessArray.push(new FormGroup({
                        pageName: new FormControl(pageName[0]?.pagename),
                        pageid: new FormControl(pagesFromField[i]),
                        pageAccess: new FormControl(pageAccessValue ? pageAccessValue : '2'),
                        validity: new FormControl((existingValue[i]?.validity && String(existingValue[i].validity)) || '0'),
                        condition: new FormControl((existingValue[i]?.condition && existingValue[i].condition) || 'always'),
                        fallbackTo: new FormControl((existingValue[i]?.condition && existingValue[i].fallbackTo) || 'n')
                    }));
                }
            }
            else {
                accessArray.push(new FormGroup({
                    pageName: new FormControl(pageName[0]?.pagename),
                    pageid: new FormControl(pagesFromField[i]),
                    pageAccess: new FormControl(pageAccessValue ? pageAccessValue : '2'),
                    validity: new FormControl((existingValue[i]?.validity && String(existingValue[i].validity)) || '0'),
                    condition: new FormControl((existingValue[i]?.condition && existingValue[i].condition) || 'always'),
                    fallbackTo: new FormControl((existingValue[i]?.condition && existingValue[i].fallbackTo) || 'n')
                }));
            }
        }
        return accessArray;
    }
    checkFieldLevelExist(fieldLevelExist, savedPageAccessPatching, pagesFromField, existingValue, i) {
        let pageAccessValue;
        if (fieldLevelExist?.length && savedPageAccessPatching) {
            pageAccessValue = this.getMostFrequentEle(fieldLevelExist?.filter(ele => (ele.pageId = pagesFromField[i]))?.map(e => (e.access ? Number(e.access) : 0)));
        }
        else {
            pageAccessValue = existingValue?.find(ele => ele.pageid === pagesFromField[i])?.pageAccess;
        }
        return pageAccessValue;
    }
    // This function for field level access
    getAccess(access, fieldPageLevel) {
        let accessField;
        if (fieldPageLevel.length === 0) {
            accessField = '3'; // accessfield is 3 for read level access
        }
        else {
            accessField = '2'; // accessfield is 2 for readwrite level access
        }
        ;
        if (fieldPageLevel.length > 0 && access?.isreadwrite) {
            accessField = '2';
        }
        else if (access?.ishide) {
            accessField = '4'; // accessfield is 4 for hide level access
        }
        else if (access?.isread) {
            accessField = '3';
        }
        else if (access?.isfull) {
            accessField = '3'; // accessfield is 5 for full level access
        }
        else if (fieldPageLevel.length === 0 && access?.isreadwrite) {
            accessField = '3';
        }
        return accessField;
    }
    // This function for page level access
    getPageAccess(access) {
        let accessField;
        accessField = '2';
        if (access?.isreadwrite) {
            accessField = '2';
        }
        else if (access?.ishide) {
            accessField = '4';
        }
        else if (access?.isread) {
            accessField = '3';
        }
        else if (access?.isfull) {
            accessField = '5';
        }
        return accessField;
    }
    getOrganizationPage(orgId) {
        return this.httpService.get(AccessManagementConfig.EndPoint.Organization.getOrganization.replace('{orgId}', orgId));
    }
    getAssetByPageId(pId) {
        return this.httpService.get(`${AccessManagementConfig.EndPoint.Asset.getPageAsset}/${pId}`);
    }
    createAsset(selectedAccess, selectedId, asset) {
        let url;
        if (selectedAccess === 'user') {
            url = `org/user/${selectedId}`;
        }
        else if (selectedAccess === 'role') {
            url = `access-control/role/${selectedId}`;
        }
        else {
            url = `platform/page-designer/policygroup/${selectedId}`;
        }
        return this.httpService.post(`/${url}/${AccessManagementConfig.EndPoint.Asset.getAsset}`, asset);
    }
    updateAssetOnDeselect(selectedAccess, selectedId, asset) {
        let url;
        if (selectedAccess === 'user') {
            url = `org/user/${selectedId}`;
        }
        else if (selectedAccess === 'role') {
            url = `access-control/role/${selectedId}`;
        }
        else {
            url = `platform/page-designer/policygroup/${selectedId}`;
        }
        return this.httpService.patch(`/${url}/${AccessManagementConfig.EndPoint.Asset.getAssetDeselect}`, asset);
    }
    getAssetById(selectedAccess, selectedId) {
        let url;
        if (selectedAccess === 'user') {
            url = AccessManagementConfig.EndPoint.Asset.getUserAsset;
        }
        else if (selectedAccess === 'role') {
            url = AccessManagementConfig.EndPoint.Asset.getRoleAsset;
        }
        else {
            url = AccessManagementConfig.EndPoint.Asset.getPolicyGroupAsset;
        }
        return this.httpService.get(`${url}/${selectedId}`);
    }
    getPolicyGroupPage(policygroupid) {
        return this.httpService.get(`/policygroup/${policygroupid}${AccessManagementConfig.EndPoint.Page.getPage}`);
    }
    getDynamicPage(selectedAccess, selectedId) {
        let url;
        if (selectedAccess === 'user') {
            url = 'org/user';
        }
        else if (selectedAccess === 'role') {
            url = 'access-control/role';
        }
        else {
            url = 'platform/page-designer/policygroup';
        }
        return this.httpService.get(`/${url}/${selectedId}${AccessManagementConfig.EndPoint.Page.getPage}`);
    }
    updateDynamicPage(selectedAccess, selectedId, pageData) {
        let url;
        if (selectedAccess === 'user') {
            url = 'org/user';
        }
        else if (selectedAccess === 'role') {
            url = 'access-control/role';
        }
        else {
            url = 'platform/page-designer/policygroup';
        }
        return this.httpService.put(`/${url}/${selectedId}${AccessManagementConfig.EndPoint.Page.getPage}`, pageData);
    }
    createAccess(fieldLevelAccess, accessBy, payload, userId, roleId, policyId) {
        let url;
        const createUrl = fieldLevelAccess
            ? AccessManagementConfig.EndPoint.Asset.getAsset
            : AccessManagementConfig.EndPoint.Page.getPage;
        // check only policy group
        if (accessBy === '3') {
            url = `${AccessManagementConfig.EndPoint.PolicyGroup.getPolicyGroup}${policyId ? policyId : '0'}${createUrl}`;
        }
        // check persona with policy group
        if (accessBy === '2') {
            url = `${AccessManagementConfig.EndPoint.Role.getRole}${roleId ? roleId : '0'}${createUrl}`;
        }
        // check user, persona with policy group
        if (accessBy === '1') {
            url = `${AccessManagementConfig.EndPoint.User.getUser}${userId ? userId : '0'}${createUrl}`;
        }
        return this.httpService.post(url, payload);
    }
    getApplicationAccess() {
        return this.httpService.get('/applicationaccess/');
    }
    checkObjectType(schema, table) {
        return this.httpService.get(`${DataBaseConfig.EndPoint.Database.checkObjectType}/${schema}/${table}`);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageAccessService, deps: [{ token: i1.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageAccessService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageAccessService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1hY2Nlc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLXBhZ2VhY2Nlc3Mvc3JjL2xpYi9waWNzLXJiYWMtcGFnZWFjY2Vzcy9AY29yZS91cmxzL3BhZ2UtYWNjZXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRXZGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBS25ELE1BQU0sT0FBTyxpQkFBaUI7SUFTUjtJQVJwQixNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2YsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNmLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDZixXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLGtEQUFrRDtJQUNsRCw0QkFBNEI7SUFDNUIsSUFBSTtJQUNKLFdBQVcsQ0FBTTtJQUNqQixZQUFvQixhQUErQjtRQUEvQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDckQsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7YUFDdEM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRDs7Ozs7T0FLRztJQUNILGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRO1FBQ3JFLE1BQU0sU0FBUyxHQUFH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QUMscUJBQXFCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsZUFBZSxDQUFDLE1BQWEsRUFBRSxLQUFZO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxlQUFlLElBQUksTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUE7SUFDdkcsQ0FBQzt3R0Eva0JVLGlCQUFpQjs0R0FBakIsaUJBQWlCLGNBRmhCLE1BQU07OzRGQUVQLGlCQUFpQjtrQkFIN0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEFjY2Vzc01hbmFnZW1lbnRDb25maWcgfSBmcm9tICcuLi8uLi9AY29yZS91cmxzL2FjY2Vzcy1tYW5hZ2VtZW50LXVybC5jb25maWcnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhQmFzZUNvbmZpZyB9IGZyb20gJy4vcmJhYy11cmwuY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VBY2Nlc3NTZXJ2aWNlIHtcclxuICBpc2Z1bGwgPSBmYWxzZTtcclxuICBpc2hpZGUgPSBmYWxzZTtcclxuICBpc3JlYWQgPSBmYWxzZTtcclxuICBpc3JlYWR3cml0ZSA9IGZhbHNlO1xyXG4gIC8vIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlKSB7XHJcbiAgLy8gICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbFxyXG4gIC8vIH1cclxuICBodHRwU2VydmljZTogYW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZSkge1xyXG4gICAgdGhpcy5fc3RvcmVzZXJ2aWNlLmN1cnJlbnRTdG9yZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlID0gcmVzWydIVFRQU0VSVklDRSddXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIHdoZW4gdXNlciBzZWxlY3RlZCBwb2xpY3lcclxuICAgKiBAcGFyYW0gYWNjZXNzIFJhdyB2YWx1ciBvZiBSQmFjIGZvcm1cclxuICAgKiBAcmV0dXJucyBmb3JtIGFycmF5IG9mIERBXHJcbiAgICogQGNoaWxkRnVuY3Rpb24gb2Ygc2F2ZVJiYWNcclxuICAgKi9cclxuICBhY2Nlc3NCeVBvbGljeShhY2Nlc3MsIGlkLCBwb2xpY3lHcm91cERhdGEsIHNlbGVjdGVkRmllbGREYXRhLCBwYWdlRGF0YSk6IGFueVtdIHtcclxuICAgIGNvbnN0IGZ1bGxBcnJheSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiBpZCkge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZERhdGEgPSBwb2xpY3lHcm91cERhdGEuZmlsdGVyKGtleSA9PiBrZXkuaWQgPT09IHZhbHVlKTtcclxuICAgICAgY29uc3QgZm9ybU9iaiA9IHtcclxuICAgICAgICBpZDogJycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgIHBvbGljeWdyb3VwbmFtZTogJycsXHJcbiAgICAgICAgcGFnZUNvbmZpZ3M6IFtdLFxyXG4gICAgICAgIGFzc2V0Q29uZmlnczogW11cclxuICAgICAgfTtcclxuICAgICAgdGhpcy5zZXRQb2xpY3lPYmooZm9ybU9iaiwgc2VsZWN0ZWREYXRhLCB2YWx1ZSk7XHJcbiAgICAgIHRoaXMubG9hZEFjY2Vzc0ZvclBhZ2UoYWNjZXNzLCBzZWxlY3RlZERhdGEsIGZvcm1PYmosIHZhbHVlLCBwYWdlRGF0YSk7XHJcbiAgICAgIGlmIChhY2Nlc3MuZmllbGRMZXZlbERhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkQWNjZXNzRm9yRmllbGRzKGFjY2Vzcywgc2VsZWN0ZWREYXRhLCBmb3JtT2JqLCB2YWx1ZSwgc2VsZWN0ZWRGaWVsZERhdGEsIHBhZ2VEYXRhKTtcclxuICAgICAgfVxyXG4gICAgICBmdWxsQXJyYXkucHVzaChmb3JtT2JqKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZnVsbEFycmF5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogd2hlbiB1c2VyIHNlbGVjdGVkIFBlcnNvbmFcclxuICAgKiBAcGFyYW0gYWNjZXNzIFJhdyB2YWx1ciBvZiBSQmFjIGZvcm1cclxuICAgKiBAcmV0dXJucyBmb3JtIGFycmF5IG9mIERBXHJcbiAgICogQGNoaWxkRnVuY3Rpb24gb2Ygc2F2ZVJiYWNcclxuICAgKi9cclxuICBhY2Nlc3NCeVBlcnNvbmEoYWNjZXNzLCBwZXJzb25hSWQsIGlkLCByb2xlQWRkZWREYXRhLCBzZWxlY3RlZEZpZWxkRGF0YSwgcGFnZURhdGEpIHtcclxuICAgIGNvbnN0IGZ1bGxBcnJheSA9IFtdO1xyXG4gICAgLy8gY29uc3QgcGVyc29uYUlkID0gdGhpcy5yYmFjRm9ybS5nZXQoJ3JvbGVpZCcpLnZhbHVlO1xyXG4gICAgLy8gY29uc3QgcGVyc29uYUlkID0gdGhpcy5yYmFjRm9ybS5nZXQoJ3JvbGVpZCcpLnZhbHVlO1xyXG4gICAgY29uc3QgZm9ybU9iaiA9IHtcclxuICAgICAgaWQ6ICcnLFxyXG4gICAgICByb2xla2V5OiAnJyxcclxuICAgICAgcm9sZW5hbWU6ICcnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgIGVmZmVjdGl2ZWRhdGU6ICcnLFxyXG4gICAgICBwYWdlQ29uZmlnczogW10sXHJcbiAgICAgIGFzc2V0Q29uZmlnczogW10sXHJcbiAgICAgIHJvbGVQb2xpY3lHcm91cENvbmZpZ3M6IFtdXHJcbiAgICB9O1xyXG5cclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBwZXJzb25hSWQpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWREYXRhID0gcm9sZUFkZGVkRGF0YS5maWx0ZXIoa2V5ID0+IGtleS5pZCA9PT0gaXRlbSk7XHJcbiAgICAgIHRoaXMuc2V0Um9sZU9iaihmb3JtT2JqLCBzZWxlY3RlZERhdGEsIGl0ZW0sIGlkKTtcclxuICAgICAgdGhpcy5sb2FkQWNjZXNzRm9yUGFnZShhY2Nlc3MsIHNlbGVjdGVkRGF0YSwgZm9ybU9iaiwgaXRlbSwgcGFnZURhdGEpO1xyXG4gICAgICBpZiAoYWNjZXNzLmZpZWxkTGV2ZWxEYXRhLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMubG9hZEFjY2Vzc0ZvckZpZWxkcyhhY2Nlc3MsIHNlbGVjdGVkRGF0YSwgZm9ybU9iaiwgaXRlbSwgc2VsZWN0ZWRGaWVsZERhdGEsIHBhZ2VEYXRhKTtcclxuICAgICAgfVxyXG4gICAgICBmdWxsQXJyYXkucHVzaChmb3JtT2JqKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdWxsQXJyYXk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB3aGVuIHVzZXIgc2VsZWN0ZWQgVXNlclxyXG4gICAqIEBwYXJhbSBhY2Nlc3MgUmF3IHZhbHVyIG9mIFJCYWMgZm9ybVxyXG4gICAqIEByZXR1cm5zIGZvcm0gYXJyYXkgb2YgREFcclxuICAgKiBAY2hpbGRGdW5jdGlvbiBvZiBzYXZlUmJhY1xyXG4gICAqL1xyXG4gIGFjY2Vzc0J5VXNlcihhY2Nlc3MsIHVzZXJJZCwgaWQsIHJvbGVpZHMsIHVzZXJMaXN0LCBzZWxlY3RlZEZpZWxkRGF0YSwgcGFnZURhdGEpIHtcclxuICAgIGNvbnN0IGZ1bGxBcnJheSA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB1c2VySWQpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWREYXRhID0gdXNlckxpc3QuZmlsdGVyKGtleSA9PiBrZXkuaWQgPT09IGl0ZW0pO1xyXG4gICAgICBjb25zdCBmb3JtT2JqID0geyAuLi5zZWxlY3RlZERhdGFbMF0gfTtcclxuICAgICAgZm9ybU9iai5wYWdlQ29uZmlncyA9IFtdO1xyXG4gICAgICBmb3JtT2JqLmFzc2V0Q29uZmlncyA9IFtdO1xyXG4gICAgICBmb3JtT2JqLnBvbGljeUdyb3VwQ29uZmlncyA9IFtdO1xyXG4gICAgICBmb3JtT2JqLnJvbGVDb25maWdzID0gW107XHJcbiAgICAgIGNvbnNvbGUubG9nKCc9PT09PT0nKTtcclxuICAgICAgdGhpcy5zZXRVc2VyT2JqKGZvcm1PYmosIHNlbGVjdGVkRGF0YSwgaXRlbSwgaWQsIHJvbGVpZHMpO1xyXG4gICAgICBjb25zb2xlLmxvZygnPT09PT09MScpO1xyXG4gICAgICB0aGlzLmxvYWRBY2Nlc3NGb3JQYWdlKGFjY2Vzcywgc2VsZWN0ZWREYXRhLCBmb3JtT2JqLCBpdGVtLCBwYWdlRGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCc9PT09PT0yJyk7XHJcbiAgICAgIGlmIChhY2Nlc3MuZmllbGRMZXZlbERhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkQWNjZXNzRm9yRmllbGRzKGFjY2Vzcywgc2VsZWN0ZWREYXRhLCBmb3JtT2JqLCBpdGVtLCBzZWxlY3RlZEZpZWxkRGF0YSwgcGFnZURhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIGZ1bGxBcnJheS5wdXNoKGZvcm1PYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmdWxsQXJyYXk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGZXRjaCBhY2Nlc3MgbGlzdCBmb3IgZGFzaGJvYXJkIGFjY2Vzc1xyXG4gICAqIEBwYXJhbSBhY2Nlc3NcclxuICAgKiBAcGFyYW0gYXNzZXREYXNoQm9hcmRDb25maWdzXHJcbiAgICogQHBhcmFtIGZvcm1PYmpcclxuICAgKiBAcGFyYW0gaWRcclxuICAgKi9cclxuICBsb2FkQWNjZXNzRm9yUGFnZShhY2Nlc3MsIHNlbGVjdGVkRGF0YSwgZm9ybU9iaiwgaWQsIHBhZ2VEYXRhKSB7XHJcbiAgICBjb25zdCBleGlzdFBhZ2VDb25maWdzID0gc2VsZWN0ZWREYXRhWzBdWydwYWdlQ29uZmlncyddO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGFjY2Vzcy5wYWdlTGV2ZWxEYXRhKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkTW9kdWxlID0gcGFnZURhdGEuZmlsdGVyKGtleSA9PiBrZXkuaWQgPT09IGl0ZW1bJ3BhZ2VpZCddKTtcclxuICAgICAgY29uc3QgcGFnZUFjY2VzcyA9IGFjY2Vzcy5wYWdlTGV2ZWxEYXRhLmZpbHRlcihrZXkgPT4ga2V5LnBhZ2VpZCA9PT0gaXRlbVsncGFnZWlkJ10pO1xyXG4gICAgICB0aGlzLnBhZ2VBY2Nlc3NDaGVjayhwYWdlQWNjZXNzKTtcclxuICAgICAgY29uc3QgcGFnZUtleSA9IHtcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICBpc2FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICBpc2Z1bGw6IHRoaXMuaXNmdWxsLFxyXG4gICAgICAgIGlzaGlkZTogdGhpcy5pc2hpZGUsXHJcbiAgICAgICAgaXNyZWFkOiB0aGlzLmlzcmVhZCxcclxuICAgICAgICBpc3JlYWR3cml0ZTogdGhpcy5pc3JlYWR3cml0ZSxcclxuICAgICAgICBwYWdlaWQ6IGl0ZW1bJ3BhZ2VpZCddLFxyXG4gICAgICAgIHBvbGljeWdyb3VwaWQ6IGlkLFxyXG4gICAgICAgIG1vZHVsZWtleTogc2VsZWN0ZWRNb2R1bGVbMF1bJ21vZHVsZWtleSddLFxyXG4gICAgICAgIHN1Ym1vZHVsZWtleTogc2VsZWN0ZWRNb2R1bGVbMF1bJ3N1Ym1vZHVsZWtleSddXHJcbiAgICAgIH07XHJcbiAgICAgIC8vIGNoZWNrIGV4aXN0IHBhZ2UgbGVuZ3RoXHJcbiAgICAgIGlmIChleGlzdFBhZ2VDb25maWdzLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0SWRzID0gZXhpc3RQYWdlQ29uZmlncy5tYXAocCA9PiBwLnBhZ2VpZCk7XHJcbiAgICAgICAgY29uc3QgY2hrUGFnZSA9IGV4aXN0SWRzLmluY2x1ZGVzKGl0ZW1bJ3BhZ2VpZCddKTtcclxuICAgICAgICBpZiAoY2hrUGFnZSkge1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSBleGlzdElkcy5pbmRleE9mKGl0ZW1bJ3BhZ2VpZCddKTtcclxuICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIC8vaWYgZm91bmRcclxuICAgICAgICAgICAgcGFnZUtleS5pZCA9IGV4aXN0UGFnZUNvbmZpZ3NbaW5kZXhdWydpZCddO1xyXG4gICAgICAgICAgICBwYWdlS2V5LmlzYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvcm1PYmoucGFnZUNvbmZpZ3MucHVzaChwYWdlS2V5KTtcclxuICAgICAgICAgICAgZXhpc3RQYWdlQ29uZmlncy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkID0geyAuLi5wYWdlS2V5IH07XHJcbiAgICAgICAgZC5pZCA9IG51bGw7XHJcbiAgICAgICAgZC5pc2FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgZm9ybU9iai5wYWdlQ29uZmlncy5wdXNoKGQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvcm1PYmoucGFnZUNvbmZpZ3MucHVzaChwYWdlS2V5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gc3RpbGwgZXhpc3Rjb25maWcgbGVuZ3RoXHJcbiAgICBpZiAoZXhpc3RQYWdlQ29uZmlncy5sZW5ndGgpIHtcclxuICAgICAgZXhpc3RQYWdlQ29uZmlncy5tYXAodCA9PiB7XHJcbiAgICAgICAgdC5pc2FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGZvcm1PYmoucGFnZUNvbmZpZ3MucHVzaCh0KTtcclxuICAgICAgICByZXR1cm4gdDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhZ2VBY2Nlc3NDaGVjayhwYWdlQWNjZXNzKSB7XHJcbiAgICBpZiAocGFnZUFjY2Vzc1swXS5wYWdlQWNjZXNzID09PSAnMScpIHtcclxuICAgICAgdGhpcy5pc2Z1bGwgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmIChwYWdlQWNjZXNzWzBdLnBhZ2VBY2Nlc3MgPT09ICc0Jykge1xyXG4gICAgICB0aGlzLmlzaGlkZSA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHBhZ2VBY2Nlc3NbMF0ucGFnZUFjY2VzcyA9PT0gJzMnKSB7XHJcbiAgICAgIHRoaXMuaXNyZWFkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAocGFnZUFjY2Vzc1swXS5wYWdlQWNjZXNzID09PSAnMicpIHtcclxuICAgICAgdGhpcy5pc3JlYWR3cml0ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldFBvbGljeU9iaihmb3JtT2JqLCBzZWxlY3RlZERhdGEsIGlkKSB7XHJcbiAgICBmb3JtT2JqLmlkID0gaWQ7XHJcbiAgICBmb3JtT2JqLmRlc2NyaXB0aW9uID0gc2VsZWN0ZWREYXRhWzBdWydkZXNjcmlwdGlvbiddO1xyXG4gICAgZm9ybU9iai5wb2xpY3lncm91cG5hbWUgPSBzZWxlY3RlZERhdGFbMF1bJ3BvbGljeWdyb3VwbmFtZSddO1xyXG4gIH1cclxuXHJcbiAgbG9hZEFjY2Vzc0ZvckZpZWxkcyhhY2Nlc3MsIHNlbGVjdGVkRGF0YSwgZm9ybU9iaiwgaWQsIHNlbGVjdGVkRmllbGREYXRhLCBwYWdlRGF0YSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWREYXRhKVxyXG4gICAgY29uc3QgYXNzZXRDb25maWdzID0gc2VsZWN0ZWREYXRhWzBdWydhc3NldENvbmZpZ3MnXS5maWx0ZXIoa2V5ID0+IGtleS5tb2R1bGVrZXkgIT09IG51bGwpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLScpXHJcbiAgICBjb25zdCBzZWxlY3RlZE1vZHVsZSA9IHBhZ2VEYXRhLmZpbHRlcihrZXkgPT4ga2V5LmlkID09PSBhY2Nlc3MuZnBhZ2VzWzBdWydpZCddKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGFjY2Vzcy5maWVsZExldmVsRGF0YSlcclxuICAgIHNlbGVjdGVkRmllbGREYXRhID1cclxuICAgICAgYWNjZXNzLmZpZWxkTGV2ZWxEYXRhICE9PSBudWxsID8gdGhpcy5zZXRTZWxlY3RlZEZpZWxkUGFnZShhY2Nlc3MuZmllbGRMZXZlbERhdGEsIHNlbGVjdGVkRmllbGREYXRhKSA6IFtdO1xyXG4gICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWREYXRhLCBhc3NldENvbmZpZ3MpXHJcbiAgICBmb3IgKGNvbnN0IHNlbGVjdGVkRmllbGQgb2Ygc2VsZWN0ZWRGaWVsZERhdGEpIHtcclxuICAgICAgaWYgKHNlbGVjdGVkRmllbGQuYWNjZXNzID09PSBudWxsKSB7XHJcbiAgICAgICAgLy8gY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRGaWVsZCk7XHJcbiAgICAgIGxldCBpc2Z1bGwgPSBmYWxzZTtcclxuICAgICAgbGV0IGlzaGlkZSA9IGZhbHNlO1xyXG4gICAgICBsZXQgaXNyZWFkID0gZmFsc2U7XHJcbiAgICAgIGxldCBpc3JlYWR3cml0ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYgKHNlbGVjdGVkRmllbGQuYWNjZXNzID09PSAnMicgfHwgc2VsZWN0ZWRGaWVsZC5hY2Nlc3MgPT09ICcxJykge1xyXG4gICAgICAgIGlzZnVsbCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRGaWVsZC5hY2Nlc3MgPT09ICc0Jykge1xyXG4gICAgICAgIGlzaGlkZSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRGaWVsZC5hY2Nlc3MgPT09ICczJykge1xyXG4gICAgICAgIGlzcmVhZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRGaWVsZC5hY2Nlc3MgPT09ICcyJykge1xyXG4gICAgICAgIGlzcmVhZHdyaXRlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBhQ29uZmlncyA9IHtcclxuICAgICAgICBpZDogc2VsZWN0ZWRGaWVsZFsnaWQnXSA/IHNlbGVjdGVkRmllbGRbJ2lkJ10gOiBudWxsLFxyXG4gICAgICAgIGlzYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgIGlzZnVsbDogaXNmdWxsLFxyXG4gICAgICAgIGlzaGlkZTogaXNoaWRlLFxyXG4gICAgICAgIGlzcmVhZDogaXNyZWFkLFxyXG4gICAgICAgIGlzcmVhZHdyaXRlOiBpc3JlYWR3cml0ZSxcclxuICAgICAgICBhc3NldGlkOiBzZWxlY3RlZEZpZWxkWydhc3NldGlkJ10sXHJcbiAgICAgICAgcG9saWN5Z3JvdXBpZDogaWQsXHJcbiAgICAgICAgcGFnZWlkOiBzZWxlY3RlZEZpZWxkWydwYWdlSWQnXSA/IHNlbGVjdGVkRmllbGRbJ3BhZ2VJZCddIDogYWNjZXNzLmZwYWdlc1swXVsnaWQnXSxcclxuICAgICAgICBtb2R1bGVrZXk6IHNlbGVjdGVkTW9kdWxlWzBdWydtb2R1bGVrZXknXSxcclxuICAgICAgICBzdWJtb2R1bGVrZXk6IHNlbGVjdGVkTW9kdWxlWzBdWydzdWJtb2R1bGVrZXknXVxyXG4gICAgICB9O1xyXG4gICAgICAvLyBjaGVjayBleGlzdCBwYWdlIGxlbmd0aFxyXG4gICAgICB0aGlzLmNoZWNrRXhpc3RBc3NldChhc3NldENvbmZpZ3MsIHNlbGVjdGVkRmllbGQsIGFDb25maWdzLCBmb3JtT2JqKTtcclxuICAgIH1cclxuICB9XHJcbiAgY2hlY2tFeGlzdEFzc2V0KGFzc2V0Q29uZmlncywgc2VsZWN0ZWRGaWVsZCwgYUNvbmZpZ3MsIGZvcm1PYmopIHtcclxuICAgIGlmIChhc3NldENvbmZpZ3MubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGV4aXN0SWRzID0gYXNzZXRDb25maWdzLm1hcChwID0+IHAuYXNzZXRpZCk7XHJcbiAgICAgIGNvbnN0IGNoa1BhZ2UgPSBleGlzdElkcy5pbmNsdWRlcyhzZWxlY3RlZEZpZWxkWydhc3NldGlkJ10pO1xyXG4gICAgICBpZiAoY2hrUGFnZSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZXhpc3RJZHMuaW5kZXhPZihzZWxlY3RlZEZpZWxkWydhc3NldGlkJ10pO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAvL2lmIGZvdW5kXHJcbiAgICAgICAgICBhQ29uZmlncy5pZCA9IGFzc2V0Q29uZmlnc1tpbmRleF1bJ2lkJ107XHJcbiAgICAgICAgICBhQ29uZmlncy5pc2FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgZm9ybU9iai5hc3NldENvbmZpZ3MucHVzaChhQ29uZmlncyk7XHJcbiAgICAgICAgICBhc3NldENvbmZpZ3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZCA9IHsgLi4uYUNvbmZpZ3MgfTtcclxuICAgICAgZC5pc2FjdGl2ZSA9IHRydWU7XHJcbiAgICAgIGQuaWQgPSBudWxsO1xyXG4gICAgICBmb3JtT2JqLmFzc2V0Q29uZmlncy5wdXNoKGQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9ybU9iai5hc3NldENvbmZpZ3MucHVzaChhQ29uZmlncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRSb2xlT2JqKGZvcm1PYmosIHNlbGVjdGVkRGF0YSwgcm9sZWlkLCBwb2xpY3lpZCkge1xyXG4gICAgZm9ybU9iai5pZCA9IHJvbGVpZDtcclxuICAgIGZvcm1PYmoucm9sZWtleSA9IHNlbGVjdGVkRGF0YVswXVsncm9sZWtleSddO1xyXG4gICAgZm9ybU9iai5yb2xlbmFtZSA9IHNlbGVjdGVkRGF0YVswXVsncm9sZW5hbWUnXTtcclxuICAgIGZvcm1PYmouZWZmZWN0aXZlZGF0ZSA9IHNlbGVjdGVkRGF0YVswXVsnZWZmZWN0aXZlZGF0ZSddO1xyXG4gICAgZm9ybU9iai5kZXNjcmlwdGlvbiA9IHNlbGVjdGVkRGF0YVswXVsnZGVzY3JpcHRpb24nXTtcclxuICAgIC8vIGxvb3AgdGhlIHBvbGljeSBncm91cFxyXG4gICAgY29uc3QgaWQgPSBwb2xpY3lpZDtcclxuICAgIGNvbnN0IGV4aXN0Um9sZVBvbGljeUNvbmZpZyA9IHNlbGVjdGVkRGF0YVswXVsncm9sZVBvbGljeUdyb3VwQ29uZmlncyddO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGlkKSB7XHJcbiAgICAgIGNvbnN0IHJwb2xpY3lDb25maWcgPSB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgaXNhY3RpdmU6IHRydWUsXHJcbiAgICAgICAgcG9saWN5Z3JvdXBpZDogaXRlbSwgLy8gZ3JvdXAgcG9saWN5IGlkXHJcbiAgICAgICAgcm9sZWlkOiByb2xlaWQgLy8gcm9sZSBpZFxyXG4gICAgICB9O1xyXG4gICAgICAvLyBjaGVjayBleGlzdCBwYWdlIGxlbmd0aFxyXG4gICAgICBpZiAoZXhpc3RSb2xlUG9saWN5Q29uZmlnLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0SWRzID0gZXhpc3RSb2xlUG9saWN5Q29uZmlnLm1hcChwID0+IHAucG9saWN5Z3JvdXBpZCk7XHJcbiAgICAgICAgY29uc3QgY2hrUGFnZSA9IGV4aXN0SWRzLmluY2x1ZGVzKGl0ZW0pO1xyXG4gICAgICAgIGlmIChjaGtQYWdlKSB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IGV4aXN0SWRzLmluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAvL2lmIGZvdW5kXHJcbiAgICAgICAgICAgIHJwb2xpY3lDb25maWcuaWQgPSBleGlzdFJvbGVQb2xpY3lDb25maWdbaW5kZXhdWydpZCddO1xyXG4gICAgICAgICAgICBleGlzdFJvbGVQb2xpY3lDb25maWcuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9ybU9iai5yb2xlUG9saWN5R3JvdXBDb25maWdzLnB1c2gocnBvbGljeUNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICAvLyBzdGlsbCBleGlzdGNvbmZpZyBsZW5ndGhcclxuICAgIGlmIChleGlzdFJvbGVQb2xpY3lDb25maWcubGVuZ3RoKSB7XHJcbiAgICAgIGV4aXN0Um9sZVBvbGljeUNvbmZpZy5tYXAodCA9PiB7XHJcbiAgICAgICAgdC5pc2FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGZvcm1PYmoucm9sZVBvbGljeUdyb3VwQ29uZmlncy5wdXNoKHQpO1xyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFVzZXJPYmooZm9ybU9iaiwgc2VsZWN0ZWREYXRhLCB1c2VySWQsIGlkLCByb2xlaWRzKSB7XHJcbiAgICAvLyBsb29wIHRoZSBwb2xpY3kgZ3JvdXBcclxuICAgIGNvbnN0IGV4aXN0Um9sZVBvbGljeUNvbmZpZyA9IHNlbGVjdGVkRGF0YVswXVsncG9saWN5R3JvdXBDb25maWdzJ107XHJcbiAgICB0aGlzLmdldENoZWNrUG9saWN5Q29uZmlnKGlkLCB1c2VySWQsIGV4aXN0Um9sZVBvbGljeUNvbmZpZywgZm9ybU9iaik7XHJcbiAgICAvLyBzdGlsbCBleGlzdGNvbmZpZyBsZW5ndGhcclxuICAgIGlmIChleGlzdFJvbGVQb2xpY3lDb25maWcubGVuZ3RoKSB7XHJcbiAgICAgIGV4aXN0Um9sZVBvbGljeUNvbmZpZy5tYXAodCA9PiB7XHJcbiAgICAgICAgdC5pc2FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGZvcm1PYmoucG9saWN5R3JvdXBDb25maWdzLnB1c2godCk7XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gbG9vcCB0aGUgcm9sZSBncm91cFxyXG4gICAgLy8gY29uc3Qgcm9sZWlkcyA9IHRoaXMucmJhY0Zvcm0uZ2V0KCdyb2xlaWQnKS52YWx1ZTtcclxuICAgIGNvbnN0IGV4aXN0Um9sZUlkID0gc2VsZWN0ZWREYXRhWzBdWydyb2xlQ29uZmlncyddO1xyXG4gICAgZm9yIChjb25zdCByb2xlIG9mIGV4aXN0Um9sZUlkKSB7XHJcbiAgICAgIGNvbnN0IGNoa1JvbGVEYXRhID0gcm9sZWlkcy5pbmNsdWRlcyhyb2xlWydyb2xlaWQnXSk7XHJcbiAgICAgIGNvbnN0IHJvbGVHcnAgPSB7XHJcbiAgICAgICAgaWQ6IHJvbGVbJ2lkJ10sXHJcbiAgICAgICAgaXNhY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgIGlzZGVmYXVsdHJvbGU6IHJvbGVbJ2lzZGVmYXVsdHJvbGUnXSxcclxuICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcclxuICAgICAgICByb2xlaWQ6IHJvbGVbJ3JvbGVpZCddLFxyXG4gICAgICAgIGVmZmVjdGl2ZWRhdGU6IHJvbGVbJ2VmZmVjdGl2ZWRhdGUnXVxyXG4gICAgICB9O1xyXG4gICAgICBpZiAoY2hrUm9sZURhdGEpIHtcclxuICAgICAgICBjb25zdCBpbmRleDEgPSByb2xlaWRzLmluZGV4T2Yocm9sZVsncm9sZWlkJ10pO1xyXG4gICAgICAgIGlmIChpbmRleDEgPiAtMSkge1xyXG4gICAgICAgICAgLy9pZiBmb3VuZFxyXG4gICAgICAgICAgcm9sZWlkcy5zcGxpY2UoaW5kZXgxLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcm9sZUdycC5pc2FjdGl2ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZm9ybU9iai5yb2xlQ29uZmlncy5wdXNoKHJvbGVHcnApO1xyXG4gICAgfVxyXG4gICAgLy8gY2hlY2sgbmV3IHJvbGVzIGdyb3VwIGlkc1xyXG4gICAgaWYgKHJvbGVpZHMubGVuZ3RoKSB7XHJcbiAgICAgIGZvciAoY29uc3Qgcm9sZUlkIG9mIHJvbGVpZHMpIHtcclxuICAgICAgICBjb25zdCByb2xlR3JwID0ge1xyXG4gICAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgICBpc2FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgIGlzZGVmYXVsdHJvbGU6IGZhbHNlLFxyXG4gICAgICAgICAgdXNlcmlkOiB1c2VySWQsXHJcbiAgICAgICAgICByb2xlaWQ6IHJvbGVJZCxcclxuICAgICAgICAgIGVmZmVjdGl2ZWRhdGU6IG5ldyBEYXRlKClcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvcm1PYmoucm9sZUNvbmZpZ3MucHVzaChyb2xlR3JwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBnZXRDaGVja1BvbGljeUNvbmZpZyhpZCwgdXNlcklkLCBleGlzdFJvbGVQb2xpY3lDb25maWcsIGZvcm1PYmopIHtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpZCkge1xyXG4gICAgICBjb25zdCBycG9saWN5Q29uZmlnID0ge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIGlzYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgIHBvbGljeWdyb3VwaWQ6IGl0ZW0sIC8vIGdyb3VwIHBvbGljeSBpZFxyXG4gICAgICAgIHVzZXJpZDogdXNlcklkIC8vIHVzZXIgaWRcclxuICAgICAgfTtcclxuICAgICAgLy8gY2hlY2sgZXhpc3QgcGFnZSBsZW5ndGhcclxuICAgICAgaWYgKGV4aXN0Um9sZVBvbGljeUNvbmZpZy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBleGlzdElkcyA9IGV4aXN0Um9sZVBvbGljeUNvbmZpZy5tYXAocCA9PiBwLnBvbGljeWdyb3VwaWQpO1xyXG4gICAgICAgIGNvbnN0IGNoa1BhZ2UgPSBleGlzdElkcy5pbmNsdWRlcyhpdGVtKTtcclxuICAgICAgICBpZiAoY2hrUGFnZSkge1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSBleGlzdElkcy5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgLy9pZiBmb3VuZFxyXG4gICAgICAgICAgICBycG9saWN5Q29uZmlnLmlkID0gZXhpc3RSb2xlUG9saWN5Q29uZmlnW2luZGV4XVsnaWQnXTtcclxuICAgICAgICAgICAgZXhpc3RSb2xlUG9saWN5Q29uZmlnLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZvcm1PYmoucG9saWN5R3JvdXBDb25maWdzLnB1c2gocnBvbGljeUNvbmZpZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldFNlbGVjdGVkRmllbGRQYWdlKHVwZGF0ZUFycmF5LCBzZWxlY3RlZEZpZWxkRGF0YSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJz09PT09PT09PT4nLCB1cGRhdGVBcnJheSwgc2VsZWN0ZWRGaWVsZERhdGEpXHJcbiAgICBpZiAodXBkYXRlQXJyYXk/Lmxlbmd0aCkge1xyXG4gICAgICBpZiAoc2VsZWN0ZWRGaWVsZERhdGE/Lmxlbmd0aCA+PSB1cGRhdGVBcnJheS5sZW5ndGgpIHtcclxuICAgICAgICBzZWxlY3RlZEZpZWxkRGF0YSA9IHRoaXMudXBkYXRlRHVwbGljYXRlc2luQXJyYXkoWy4uLnNlbGVjdGVkRmllbGREYXRhXSwgWy4uLnVwZGF0ZUFycmF5XSk7XHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkRmllbGREYXRhO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlbGVjdGVkRmllbGREYXRhID0gWy4uLnVwZGF0ZUFycmF5XTtcclxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRGaWVsZERhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgdXBkYXRlRHVwbGljYXRlc2luQXJyYXkob3JpZ0FycjogYW55W10sIHVwZGF0aW5nQXJyOiBhbnlbXSk6IGFueVtdIHtcclxuICAgIGNvbnN0IHVwZGF0aW5nQXJyaWRzID0gbmV3IFNldCh1cGRhdGluZ0Fyci5tYXAoZWxlID0+IGVsZS5hc3NldGlkKSk7XHJcbiAgICByZXR1cm4gWy4uLnVwZGF0aW5nQXJyLCAuLi5vcmlnQXJyLmZpbHRlcihlbGUgPT4gIXVwZGF0aW5nQXJyaWRzLmhhcyhlbGUuYXNzZXRpZCkpXTtcclxuICB9XHJcbiAgZ2V0TW9zdEZyZXF1ZW50RWxlKGFycikge1xyXG4gICAgY29uc3QgaGFzaE1hcCA9IGFyci5yZWR1Y2UoKGFjYywgdmFsKSA9PiB7XHJcbiAgICAgIGFjY1tTdHJpbmcodmFsKV0gPSAoYWNjW3ZhbF0gfHwgMCkgKyAxO1xyXG4gICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwge30pO1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGhhc2hNYXApLnJlZHVjZSgoYSwgYikgPT4gKGhhc2hNYXBbYV0gPiBoYXNoTWFwW2JdID8gYSA6IGIpKTtcclxuICB9XHJcbiAgZ2V0QWNjZXNzQXJyYXlPbkNsaWNrKHBhZ2VzRnJvbUZpZWxkLCBwYWdlRGF0YSwgc2VsZWN0ZWRGaWVsZERhdGEsIHNhdmVkUGFnZUFjY2Vzc1BhdGNoaW5nLCBleGlzdGluZ1ZhbHVlKSB7XHJcbiAgICBjb25zdCBhY2Nlc3NBcnJheTogYW55ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VzRnJvbUZpZWxkPy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBwYWdlTmFtZSA9IHBhZ2VEYXRhLmZpbHRlcihrZXkgPT4ga2V5LmlkID09PSBwYWdlc0Zyb21GaWVsZFtpXSk7XHJcbiAgICAgIGNvbnN0IGZpZWxkTGV2ZWxFeGlzdCA9IHNlbGVjdGVkRmllbGREYXRhLmZpbHRlcihlbGUgPT4gZWxlLnBhZ2VJZCA9PSBwYWdlc0Zyb21GaWVsZFtpXSk7XHJcbiAgICAgIGNvbnN0IHBhZ2VBY2Nlc3NWYWx1ZSA9IHRoaXMuY2hlY2tGaWVsZExldmVsRXhpc3QoXHJcbiAgICAgICAgZmllbGRMZXZlbEV4aXN0LFxyXG4gICAgICAgIHNhdmVkUGFnZUFjY2Vzc1BhdGNoaW5nLFxyXG4gICAgICAgIHBhZ2VzRnJvbUZpZWxkLFxyXG4gICAgICAgIGV4aXN0aW5nVmFsdWUsXHJcbiAgICAgICAgaVxyXG4gICAgICApO1xyXG4gICAgICBpZighZXhpc3RpbmdWYWx1ZVtpXSl7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlVmVyc2lvbiA9IHBhZ2VOYW1lWzBdPy5hY3RpdmVWZXJzaW9uO1xyXG4gICAgICAgIGxldCB0YWJsZVNjaGVtYUNvbmZpZyA9IGFjdGl2ZVZlcnNpb24/LnRhYmxlc2NoZW1hY29uZmlnO1xyXG4gICAgICAgIHRhYmxlU2NoZW1hQ29uZmlnICA9IEpTT04ucGFyc2UodGFibGVTY2hlbWFDb25maWcpO1xyXG4gICAgICAgIGNvbnN0IG9iamVjdFR5cGUgPSB0YWJsZVNjaGVtYUNvbmZpZz8ub2JqZWN0VHlwZSA/IHRhYmxlU2NoZW1hQ29uZmlnLm9iamVjdFR5cGUgOiAndGFibGUnO1xyXG4gICAgICAgIGlmKG9iamVjdFR5cGUgPT09ICd2aWV3Jyl7XHJcbiAgICAgICAgICBhY2Nlc3NBcnJheS5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgRm9ybUdyb3VwKHtcclxuICAgICAgICAgICAgICBwYWdlTmFtZTogbmV3IEZvcm1Db250cm9sKHBhZ2VOYW1lWzBdPy5wYWdlbmFtZSksXHJcbiAgICAgICAgICAgICAgcGFnZWlkOiBuZXcgRm9ybUNvbnRyb2wocGFnZXNGcm9tRmllbGRbaV0pLFxyXG4gICAgICAgICAgICAgIHBhZ2VBY2Nlc3M6IG5ldyBGb3JtQ29udHJvbCgnMycpLFxyXG4gICAgICAgICAgICAgIHZhbGlkaXR5OiBuZXcgRm9ybUNvbnRyb2woKGV4aXN0aW5nVmFsdWVbaV0/LnZhbGlkaXR5ICYmIFN0cmluZyhleGlzdGluZ1ZhbHVlW2ldLnZhbGlkaXR5KSkgfHwgJzAnKSxcclxuICAgICAgICAgICAgICBjb25kaXRpb246IG5ldyBGb3JtQ29udHJvbCgoZXhpc3RpbmdWYWx1ZVtpXT8uY29uZGl0aW9uICYmIGV4aXN0aW5nVmFsdWVbaV0uY29uZGl0aW9uKSB8fCAnYWx3YXlzJyksXHJcbiAgICAgICAgICAgICAgZmFsbGJhY2tUbzogbmV3IEZvcm1Db250cm9sKChleGlzdGluZ1ZhbHVlW2ldPy5jb25kaXRpb24gJiYgZXhpc3RpbmdWYWx1ZVtpXS5mYWxsYmFja1RvKSB8fCAnbicpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhY2Nlc3NBcnJheS5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgRm9ybUdyb3VwKHtcclxuICAgICAgICAgICAgICBwYWdlTmFtZTogbmV3IEZvcm1Db250cm9sKHBhZ2VOYW1lWzBdPy5wYWdlbmFtZSksXHJcbiAgICAgICAgICAgICAgcGFnZWlkOiBuZXcgRm9ybUNvbnRyb2wocGFnZXNGcm9tRmllbGRbaV0pLFxyXG4gICAgICAgICAgICAgIHBhZ2VBY2Nlc3M6IG5ldyBGb3JtQ29udHJvbChwYWdlQWNjZXNzVmFsdWUgPyBwYWdlQWNjZXNzVmFsdWUgOiAnMicpLFxyXG4gICAgICAgICAgICAgIHZhbGlkaXR5OiBuZXcgRm9ybUNvbnRyb2woKGV4aXN0aW5nVmFsdWVbaV0/LnZhbGlkaXR5ICYmIFN0cmluZyhleGlzdGluZ1ZhbHVlW2ldLnZhbGlkaXR5KSkgfHwgJzAnKSxcclxuICAgICAgICAgICAgICBjb25kaXRpb246IG5ldyBGb3JtQ29udHJvbCgoZXhpc3RpbmdWYWx1ZVtpXT8uY29uZGl0aW9uICYmIGV4aXN0aW5nVmFsdWVbaV0uY29uZGl0aW9uKSB8fCAnYWx3YXlzJyksXHJcbiAgICAgICAgICAgICAgZmFsbGJhY2tUbzogbmV3IEZvcm1Db250cm9sKChleGlzdGluZ1ZhbHVlW2ldPy5jb25kaXRpb24gJiYgZXhpc3RpbmdWYWx1ZVtpXS5mYWxsYmFja1RvKSB8fCAnbicpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgYWNjZXNzQXJyYXkucHVzaChcclxuICAgICAgICAgIG5ldyBGb3JtR3JvdXAoe1xyXG4gICAgICAgICAgICBwYWdlTmFtZTogbmV3IEZvcm1Db250cm9sKHBhZ2VOYW1lWzBdPy5wYWdlbmFtZSksXHJcbiAgICAgICAgICAgIHBhZ2VpZDogbmV3IEZvcm1Db250cm9sKHBhZ2VzRnJvbUZpZWxkW2ldKSxcclxuICAgICAgICAgICAgcGFnZUFjY2VzczogbmV3IEZvcm1Db250cm9sKHBhZ2VBY2Nlc3NWYWx1ZSA/IHBhZ2VBY2Nlc3NWYWx1ZSA6ICcyJyksXHJcbiAgICAgICAgICAgIHZhbGlkaXR5OiBuZXcgRm9ybUNvbnRyb2woKGV4aXN0aW5nVmFsdWVbaV0/LnZhbGlkaXR5ICYmIFN0cmluZyhleGlzdGluZ1ZhbHVlW2ldLnZhbGlkaXR5KSkgfHwgJzAnKSxcclxuICAgICAgICAgICAgY29uZGl0aW9uOiBuZXcgRm9ybUNvbnRyb2woKGV4aXN0aW5nVmFsdWVbaV0/LmNvbmRpdGlvbiAmJiBleGlzdGluZ1ZhbHVlW2ldLmNvbmRpdGlvbikgfHwgJ2Fsd2F5cycpLFxyXG4gICAgICAgICAgICBmYWxsYmFja1RvOiBuZXcgRm9ybUNvbnRyb2woKGV4aXN0aW5nVmFsdWVbaV0/LmNvbmRpdGlvbiAmJiBleGlzdGluZ1ZhbHVlW2ldLmZhbGxiYWNrVG8pIHx8ICduJylcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFjY2Vzc0FycmF5O1xyXG4gIH1cclxuXHJcbiAgY2hlY2tGaWVsZExldmVsRXhpc3QoZmllbGRMZXZlbEV4aXN0LCBzYXZlZFBhZ2VBY2Nlc3NQYXRjaGluZywgcGFnZXNGcm9tRmllbGQsIGV4aXN0aW5nVmFsdWUsIGkpIHtcclxuICAgIGxldCBwYWdlQWNjZXNzVmFsdWU6IGFueTtcclxuICAgIGlmIChmaWVsZExldmVsRXhpc3Q/Lmxlbmd0aCAmJiBzYXZlZFBhZ2VBY2Nlc3NQYXRjaGluZykge1xyXG4gICAgICBwYWdlQWNjZXNzVmFsdWUgPSB0aGlzLmdldE1vc3RGcmVxdWVudEVsZShcclxuICAgICAgICBmaWVsZExldmVsRXhpc3Q/LmZpbHRlcihlbGUgPT4gKGVsZS5wYWdlSWQgPSBwYWdlc0Zyb21GaWVsZFtpXSkpPy5tYXAoZSA9PiAoZS5hY2Nlc3MgPyBOdW1iZXIoZS5hY2Nlc3MpIDogMCkpXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwYWdlQWNjZXNzVmFsdWUgPSBleGlzdGluZ1ZhbHVlPy5maW5kKGVsZSA9PiBlbGUucGFnZWlkID09PSBwYWdlc0Zyb21GaWVsZFtpXSk/LnBhZ2VBY2Nlc3M7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFnZUFjY2Vzc1ZhbHVlO1xyXG4gIH1cclxuICAvLyBUaGlzIGZ1bmN0aW9uIGZvciBmaWVsZCBsZXZlbCBhY2Nlc3NcclxuICBnZXRBY2Nlc3MoYWNjZXNzLGZpZWxkUGFnZUxldmVsKSB7XHJcbiAgICBsZXQgYWNjZXNzRmllbGQ6IGFueTtcclxuICAgIGlmKGZpZWxkUGFnZUxldmVsLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgIGFjY2Vzc0ZpZWxkID0gJzMnOyAgIC8vIGFjY2Vzc2ZpZWxkIGlzIDMgZm9yIHJlYWQgbGV2ZWwgYWNjZXNzXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBhY2Nlc3NGaWVsZCA9ICcyJzsgLy8gYWNjZXNzZmllbGQgaXMgMiBmb3IgcmVhZHdyaXRlIGxldmVsIGFjY2Vzc1xyXG4gICAgfTtcclxuICAgIGlmIChmaWVsZFBhZ2VMZXZlbC5sZW5ndGggPiAwICYmIGFjY2Vzcz8uaXNyZWFkd3JpdGUpIHtcclxuICAgICAgYWNjZXNzRmllbGQgPSAnMic7XHJcbiAgICB9IGVsc2UgaWYgKGFjY2Vzcz8uaXNoaWRlKSB7XHJcbiAgICAgIGFjY2Vzc0ZpZWxkID0gJzQnOyAgLy8gYWNjZXNzZmllbGQgaXMgNCBmb3IgaGlkZSBsZXZlbCBhY2Nlc3NcclxuICAgIH0gZWxzZSBpZiAoYWNjZXNzPy5pc3JlYWQpIHtcclxuICAgICAgYWNjZXNzRmllbGQgPSAnMyc7XHJcbiAgICB9IGVsc2UgaWYgKGFjY2Vzcz8uaXNmdWxsKSB7XHJcbiAgICAgIGFjY2Vzc0ZpZWxkID0gJzMnOyAgLy8gYWNjZXNzZmllbGQgaXMgNSBmb3IgZnVsbCBsZXZlbCBhY2Nlc3NcclxuICAgIH1cclxuICAgICAgZWxzZSBpZiAoZmllbGRQYWdlTGV2ZWwubGVuZ3RoID09PSAwICYmIGFjY2Vzcz8uaXNyZWFkd3JpdGUpIHtcclxuICAgICAgYWNjZXNzRmllbGQgPSAnMyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWNjZXNzRmllbGQ7XHJcbiAgfVxyXG5cclxuICAvLyBUaGlzIGZ1bmN0aW9uIGZvciBwYWdlIGxldmVsIGFjY2Vzc1xyXG4gIGdldFBhZ2VBY2Nlc3MoYWNjZXNzKSB7XHJcbiAgICBsZXQgYWNjZXNzRmllbGQ6IGFueTtcclxuICAgICAgYWNjZXNzRmllbGQgPSAnMic7XHJcbiAgICAgICAgaWYgKGFjY2Vzcz8uaXNyZWFkd3JpdGUpIHtcclxuICAgICAgYWNjZXNzRmllbGQgPSAnMic7XHJcbiAgICB9IGVsc2UgaWYgKGFjY2Vzcz8uaXNoaWRlKSB7XHJcbiAgICAgIGFjY2Vzc0ZpZWxkID0gJzQnO1xyXG4gICAgfSBlbHNlIGlmIChhY2Nlc3M/LmlzcmVhZCkge1xyXG4gICAgICBhY2Nlc3NGaWVsZCA9ICczJztcclxuICAgIH0gZWxzZSBpZiAoYWNjZXNzPy5pc2Z1bGwpIHtcclxuICAgICAgYWNjZXNzRmllbGQgPSAnNSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWNjZXNzRmllbGQ7XHJcbiAgfVxyXG5cclxuICBnZXRPcmdhbml6YXRpb25QYWdlKG9yZ0lkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnLkVuZFBvaW50Lk9yZ2FuaXphdGlvbi5nZXRPcmdhbml6YXRpb24ucmVwbGFjZSgne29yZ0lkfScsIG9yZ0lkKSk7XHJcbiAgfVxyXG5cclxuICBnZXRBc3NldEJ5UGFnZUlkKHBJZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoYCR7QWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5Bc3NldC5nZXRQYWdlQXNzZXR9LyR7cElkfWApO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQXNzZXQoc2VsZWN0ZWRBY2Nlc3M6IGFueSwgc2VsZWN0ZWRJZDogYW55LCBhc3NldDogYW55KSB7XHJcbiAgICBsZXQgdXJsOiBhbnk7XHJcbiAgICBpZiAoc2VsZWN0ZWRBY2Nlc3MgPT09ICd1c2VyJykge1xyXG4gICAgICB1cmwgPSBgb3JnL3VzZXIvJHtzZWxlY3RlZElkfWA7XHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQWNjZXNzID09PSAncm9sZScpIHtcclxuICAgICAgdXJsID0gYGFjY2Vzcy1jb250cm9sL3JvbGUvJHtzZWxlY3RlZElkfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1cmwgPSBgcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lncm91cC8ke3NlbGVjdGVkSWR9YDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoYC8ke3VybH0vJHtBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnLkVuZFBvaW50LkFzc2V0LmdldEFzc2V0fWAsIGFzc2V0KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUFzc2V0T25EZXNlbGVjdChzZWxlY3RlZEFjY2VzczogYW55LCBzZWxlY3RlZElkOiBhbnksIGFzc2V0OiBhbnkpIHtcclxuICAgIGxldCB1cmw6IGFueTtcclxuICAgIGlmIChzZWxlY3RlZEFjY2VzcyA9PT0gJ3VzZXInKSB7XHJcbiAgICAgIHVybCA9IGBvcmcvdXNlci8ke3NlbGVjdGVkSWR9YDtcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRBY2Nlc3MgPT09ICdyb2xlJykge1xyXG4gICAgICB1cmwgPSBgYWNjZXNzLWNvbnRyb2wvcm9sZS8ke3NlbGVjdGVkSWR9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVybCA9IGBwbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BvbGljeWdyb3VwLyR7c2VsZWN0ZWRJZH1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucGF0Y2goYC8ke3VybH0vJHtBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnLkVuZFBvaW50LkFzc2V0LmdldEFzc2V0RGVzZWxlY3R9YCwgYXNzZXQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXNzZXRCeUlkKHNlbGVjdGVkQWNjZXNzOiBzdHJpbmcsIHNlbGVjdGVkSWQ6IGFueSkge1xyXG4gICAgbGV0IHVybDogYW55O1xyXG4gICAgaWYgKHNlbGVjdGVkQWNjZXNzID09PSAndXNlcicpIHtcclxuICAgICAgdXJsID0gQWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5Bc3NldC5nZXRVc2VyQXNzZXQ7XHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQWNjZXNzID09PSAncm9sZScpIHtcclxuICAgICAgdXJsID0gQWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5Bc3NldC5nZXRSb2xlQXNzZXQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1cmwgPSBBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnLkVuZFBvaW50LkFzc2V0LmdldFBvbGljeUdyb3VwQXNzZXQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoYCR7dXJsfS8ke3NlbGVjdGVkSWR9YCk7XHJcbiAgfVxyXG5cclxuICBnZXRQb2xpY3lHcm91cFBhZ2UocG9saWN5Z3JvdXBpZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoYC9wb2xpY3lncm91cC8ke3BvbGljeWdyb3VwaWR9JHtBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnLkVuZFBvaW50LlBhZ2UuZ2V0UGFnZX1gKTtcclxuICB9XHJcblxyXG4gIGdldER5bmFtaWNQYWdlKHNlbGVjdGVkQWNjZXNzOiBhbnksIHNlbGVjdGVkSWQ6IGFueSkge1xyXG4gICAgbGV0IHVybDogYW55O1xyXG4gICAgaWYgKHNlbGVjdGVkQWNjZXNzID09PSAndXNlcicpIHtcclxuICAgICAgdXJsID0gJ29yZy91c2VyJztcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRBY2Nlc3MgPT09ICdyb2xlJykge1xyXG4gICAgICB1cmwgPSAnYWNjZXNzLWNvbnRyb2wvcm9sZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1cmwgPSAncGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lncm91cCc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoYC8ke3VybH0vJHtzZWxlY3RlZElkfSR7QWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5QYWdlLmdldFBhZ2V9YCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVEeW5hbWljUGFnZShzZWxlY3RlZEFjY2VzczogYW55LCBzZWxlY3RlZElkOiBhbnksIHBhZ2VEYXRhOiBhbnkpIHtcclxuICAgIGxldCB1cmw6IGFueTtcclxuICAgIGlmIChzZWxlY3RlZEFjY2VzcyA9PT0gJ3VzZXInKSB7XHJcbiAgICAgIHVybCA9ICdvcmcvdXNlcic7XHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQWNjZXNzID09PSAncm9sZScpIHtcclxuICAgICAgdXJsID0gJ2FjY2Vzcy1jb250cm9sL3JvbGUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdXJsID0gJ3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5Z3JvdXAnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucHV0KGAvJHt1cmx9LyR7c2VsZWN0ZWRJZH0ke0FjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuUGFnZS5nZXRQYWdlfWAsIHBhZ2VEYXRhKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUFjY2VzcyhmaWVsZExldmVsQWNjZXNzOiBib29sZWFuLCBhY2Nlc3NCeTogc3RyaW5nLCBwYXlsb2FkOiBhbnksIHVzZXJJZDogYW55LCByb2xlSWQ6IGFueSwgcG9saWN5SWQ6IGFueSkge1xyXG4gICAgbGV0IHVybDogYW55O1xyXG4gICAgY29uc3QgY3JlYXRlVXJsID0gZmllbGRMZXZlbEFjY2Vzc1xyXG4gICAgICA/IEFjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuQXNzZXQuZ2V0QXNzZXRcclxuICAgICAgOiBBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnLkVuZFBvaW50LlBhZ2UuZ2V0UGFnZTtcclxuICAgIC8vIGNoZWNrIG9ubHkgcG9saWN5IGdyb3VwXHJcbiAgICBpZiAoYWNjZXNzQnkgPT09ICczJykge1xyXG4gICAgICB1cmwgPSBgJHtBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnLkVuZFBvaW50LlBvbGljeUdyb3VwLmdldFBvbGljeUdyb3VwfSR7cG9saWN5SWQgPyBwb2xpY3lJZCA6ICcwJ30ke2NyZWF0ZVVybH1gO1xyXG4gICAgfVxyXG4gICAgLy8gY2hlY2sgcGVyc29uYSB3aXRoIHBvbGljeSBncm91cFxyXG4gICAgaWYgKGFjY2Vzc0J5ID09PSAnMicpIHtcclxuICAgICAgdXJsID0gYCR7QWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5Sb2xlLmdldFJvbGV9JHtyb2xlSWQgPyByb2xlSWQgOiAnMCd9JHtjcmVhdGVVcmx9YDtcclxuICAgIH1cclxuICAgIC8vIGNoZWNrIHVzZXIsIHBlcnNvbmEgd2l0aCBwb2xpY3kgZ3JvdXBcclxuICAgIGlmIChhY2Nlc3NCeSA9PT0gJzEnKSB7XHJcbiAgICAgIHVybCA9IGAke0FjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuVXNlci5nZXRVc2VyfSR7dXNlcklkID8gdXNlcklkIDogJzAnfSR7Y3JlYXRlVXJsfWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KHVybCwgcGF5bG9hZCk7XHJcbiAgfVxyXG5cclxuICBnZXRBcHBsaWNhdGlvbkFjY2VzcygpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldCgnL2FwcGxpY2F0aW9uYWNjZXNzLycpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tPYmplY3RUeXBlKHNjaGVtYTpzdHJpbmcsIHRhYmxlOnN0cmluZyl7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoYCR7RGF0YUJhc2VDb25maWcuRW5kUG9pbnQuRGF0YWJhc2UuY2hlY2tPYmplY3RUeXBlfS8ke3NjaGVtYX0vJHt0YWJsZX1gKVxyXG4gIH1cclxufVxyXG4iXX0=